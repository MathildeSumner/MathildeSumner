let myData = {};

function fetchData() {
    const comicNumber = Math.floor(Math.random() * 3001);
    fetch(`https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                console.log(res);
            }
        })
        .then(res => {
            myData = res;
            console.log(myData);

            // Title
            document.getElementById('title').innerHTML = myData.title;

            // Image
            document.getElementById('comic').src = myData.img;
            document.getElementById('comic').setAttribute('alt', myData.alt);

            // Date
            let month = myData.month;
            let day = myData.day;
            let year = myData.year;
            document.getElementById('date').innerHTML = `${month}/${day}/${year}`;
        })
        .catch(error => { console.log(error) });
}

fetchData();

document.getElementById('generate').addEventListener("click", e => { fetchData(); });

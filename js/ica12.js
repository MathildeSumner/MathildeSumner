function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                console.log(res);
            }
        })
        .then(data => {
            console.log(data);
            document.getElementById("jokeDisplay").innerText = data.joke;
        })
        .catch(error => {
            console.error(error);
        });
}

getJoke();
document.getElementById("joke").addEventListener("click", getJoke);

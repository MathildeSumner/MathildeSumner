let ourObject = {
    "name": "Tilly",
    "profession": "College Student",
    "age": "20",
    "pets": [{"name" : "larken","type" : "dog","age" : "7"}]
}

console.log(ourObject);

let myData = {};

function fetchData(){
fetch('https://catfact.ninja/fact')
    .then(res => {
        if(res.ok){
            return res.json();
        }else{
            console.log(res);
        }
    }).then(res => {
        myData = res;
        console.log(myData);
        document.getElementById("fact").innerHTML = myData.fact;
    })
    .catch(error => {console.log(error)})
}
fetchData();

document.getElementById("generate").addEventListener("click", e=> {fetchData()})

console.log(fetchData);

let name = "Tilly";

let myString = `hello ${name} !`;

console.log(myString);
console.log(document.querySelector('button'));

hello('Tilly');

function hello(name){
    alert("hello " + name);

}

let text = ["one","two","three"];
let paragraph = " ";

function buildText(arr){
    for(let i=0; i<arr.length; i++){
        paragraph += arr[i] + 
    }
}
document.getElementById("my_head").addEventListener("click", function(e){
    alert("clicked the h1");
    document.getElementById("paragraph").innerHTML = "its pink now";
    document.getElementById("paragraph").style.color = "pink";
})
document.getElementById("button").addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
});
let proj;
fetch('../portfolio/portfolio.json')
    .then(response =>{
        return response.json();
    }).then(projects => {
        console.log(projects);
        proj = projects;
        parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

    function parseData(data) {
        for (let i = 0; i < data.projects.length; i++) {
            document.getElementById("projects").innerHTML += `
            <a href="../portfolio/${data.projects[i].subdomain}.html">
                <div class="row project" id="${data.projects[i].subdomain}">
                    <div class="projimg">
                        <img src="../portfolio/img/covers/cover (${i + 1}).png">
                    </div>
                    <div class="description">
                        <h2>${data.projects[i].name}</h2>
                        <p>${data.projects[i].abstract}</p>
                    </div>
                </div>
            </a>`;
        }
    }
    
for(b of document.querySelectorAll("#buttons button")){
    b.addEventListener("click", e=>{
        console.log(e.target.value);
        sortProjects(e.target.value);
    })
}

function sortProjects(button){
    if(button == "clear"){
        for(let i=0; i<proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    }else if(button != undefined){
        for(let i=0; i<proj.projects.length;i++){
            if(proj.projects[i].category.includes(button) == true){
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            }else{
                document.getElementById(proj.projects[i].subdomain).style.display = "none";
            }
        }
    }else{
        console.log("error, button value is undefined");
    }

}
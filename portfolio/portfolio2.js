let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch('../portfolio/portfolio.json')
    .then(response =>{
        return response.json();
    }).then(projects => {
        //console.log(projects);
        proj = projects;
        findProjectInJSON(projects);
        // parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

function findProjectInJSON(projects){
    for(let i=0; i<projects.projects.length; i++){
        if(projects.projects[i].subdomain == subdomain){
            buildPage(projects.projects[i]);
            break;
        }else{
            continue;
        }
    }
}

function buildPage(project){
    console.log(project);
    document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;
    document.getElementById("project").innerHTML += `<h2>${project.description}</h2`;
}

function buildPage(project) {
    console.log(project);
    document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;
    document.getElementById("project").innerHTML += `<h2>${project.description}</h2>`;

    // Build the carousel dynamically using project images
    buildCarousel(project.images, project.alt_text);
}

function buildCarousel(images, altTexts) {
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumb-bar');
    const overlay = document.querySelector('.overlay');

    // Loop through images and add them to the thumbBar
    images.forEach((image, index) => {
        const newImage = document.createElement('img');
        newImage.src = `/path/to/your/images/folder/${image}.jpg`; // Assuming images are stored by filename in a folder
        newImage.alt = altTexts[index];
        newImage.style.width = '100px';  // Set thumbnail size
        newImage.style.height = 'auto';  // Maintain aspect ratio

        thumbBar.appendChild(newImage);

        // Add click event to change the displayed image
        newImage.addEventListener('click', e => {
            displayedImage.src = e.target.src;
            displayedImage.alt = e.target.alt;

            // Adjust overlay size based on the image
            overlay.style.width = `${displayedImage.offsetWidth}px`;
            overlay.style.height = `${displayedImage.offsetHeight}px`;
        });
    });
}
let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/") + 1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch('../portfolio/portfolio.json')
    .then(response => response.json())
    .then(projects => {
        findProjectInJSON(projects);
    })
    .catch(err => console.log(`Error: ${err}`));

function findProjectInJSON(projects) {
    for (let i = 0; i < projects.projects.length; i++) {
        if (projects.projects[i].subdomain === subdomain) {
            buildPage(projects.projects[i]);
            break;
        }
    }
}

function buildPage(project) {
    console.log(project);

    // Add project name and description dynamically
    document.getElementById("project").innerHTML += `<h1 id="title">${project.name}</h1>`;
    document.getElementById("project").innerHTML += `<h2 id="description">${project.description}</h2>`;

    // Determine the folder path based on the project
    let folderPath = getFolderPath(project);

    // Build the carousel using images and captions from the project
    buildCarousel(project.images, project.alt_text, folderPath);
}

function getFolderPath(project) {
    // Adjust the folder path based on the project type
    if (project.name.toLowerCase().includes("landscape")) {
        return 'landscapes';
    } else if (project.name.toLowerCase().includes("ceramic")) {
        return 'ceramics';
    } else if (project.name.toLowerCase().includes("website")) {
        return 'website';
    } else {
        return 'records'; // Default folder
    }
}

function buildCarousel(images, altTexts, folderPath) {
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumb-bar');

    // Check if there are images in the array to avoid errors
    if (!images || images.length === 0) {
        console.log("No images available.");
        return;  // Exit if no images are available
    }

    // Set initial displayed image
    if (images[0]) {
        displayedImage.src = `../portfolio/img/${folderPath}/${images[0]}.png`;
        displayedImage.alt = altTexts ? altTexts[0] : '';
    }

    // Loop through images to add thumbnails to the thumb-bar
    images.forEach((image, index) => {
        const newImage = document.createElement('img');
        const imgPath = `../portfolio/img/${folderPath}/${image}.png`;  

        newImage.src = imgPath;
        newImage.alt = altTexts ? altTexts[index] : '';
        
        // Add click event listener to update the displayed image
        newImage.addEventListener('click', (e) => {
            displayedImage.src = e.target.src;
            displayedImage.alt = e.target.alt;
        });

        thumbBar.appendChild(newImage);
    });
}

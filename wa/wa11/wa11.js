const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const pics = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']

// Declaring the alternative text for each image file //
const imageAltText = {
    'pic1.jpg': 'A girl dressed as supergirl',
    'pic2.jpg': 'A corgi with his tongue sticking out',
    'pic3.jpg': 'A girl dressed as batman and a girl dressed as a pirate',
    'pic4.jpg': 'A group of girls dressed as the characters from the wizard of oz',
    'pic5.jpg': 'A corgi dressed like a pumpkin'

  };

/* Looping through images */
pics.forEach((pic) => {
    const newImage = document.createElement('img');
    newImage.src = `/wa/wa11/images/${pic}`;
    newImage.alt = imageAltText[pic];
    newImage.style.width = '100px';  // Set the size of thumbnails here
    newImage.style.height = 'auto';  // Maintain aspect ratio


    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => { // When you click the thumbnail
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;

        overlay.style.width = `${displayedImage.offsetWidth}px`;
        overlay.style.height = `${displayedImage.offsetHeight}px`;
    });
});

// Wiring up the Darken/Lighten button //

btn.addEventListener('click', e => {
    if (e.target.getAttribute("class") === "dark") {
        e.target.setAttribute("class", "light");
        e.target.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)"; // Darken the overlay
    } else {
        e.target.setAttribute("class", "dark");
        e.target.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)"; // Lighten the overlay
    }
});


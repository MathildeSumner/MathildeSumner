const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const pics = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']

// Declaring the alternative text for each image file //
const imageAltText = {
    'pic1.jpg': 'A close up picture of a blue eye',
    'pic2.jpg': 'A close-up of a white rock',
    'pic3.jpg': 'A bunch of purple and white flowers',
    'pic4.jpg': 'A photo of egyptian hieroglyphics',
    'pic5.jpg': 'A brown, yellow, and white moth sitting on a green leaf'

  };

/* Looping through images */
pics.forEach((pic) => {
    const newImage = document.createElement('img');
    newImage.src = `/wa/wa11/images/${pic}`;
    newImage.alt = imageAltText[pic];

    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => { //when you click the photo//
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
});

// Wiring up the Darken/Lighten button //

btn.addEventListener('click', e => {  
    if (e.target.getAttribute("class") === "dark") {
      e.target.setAttribute("class", "light");
      e.target.textContent = "Lighten";
      overlay.style.backgroundColor = "rgb(0 0 0 / 50%)"; // Darken the overlay //
    } else {
      e.target.setAttribute("class", "dark");
      e.target.textContent = "Darken";
      overlay.style.backgroundColor = "rgb(0 0 0 / 0%)"; // Lighten the overlay //
    }
  });


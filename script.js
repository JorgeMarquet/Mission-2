console.log("this script is working-mission2");

const text = document.getElementById("header");

/* Changing the header title with a click*/
text.addEventListener("click", function () {
  text.textContent = "You have changed this text with a click";
});

/* Function HIDE OTHER IMAGES  */
function hideOtherImages(clickedImage) {
  const images = document.querySelectorAll("img");

  // Loop through all images and hide the ones that are not the clicked image
  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    // Use conditional operator to check if the image is the clicked image
    const shouldHide = image === clickedImage ? false : true;

    // Apply display "none" to hide the image if it should be hidden
    if (shouldHide) {
      // Delay the hiding of the image by 500 milliseconds (0.5 seconds)
      setTimeout(function () {
        image.style.display = "none";
      }, 500);
    }
  }
}

/* THe 4 images*/

// DANTE
const dante = document.querySelector(".dante");
dante.addEventListener("click", function () {
  hideOtherImages(dante);
});

// SANTO
const santo = document.querySelector(".santo");
santo.addEventListener("click", function () {
  hideOtherImages(santo);
});

// ZAPATA
const zapata = document.querySelector(".zapata");
zapata.addEventListener("click", function () {
  hideOtherImages(zapata);
});

// SPEEDY GONZALEZ
const speedy = document.querySelector(".gonzalez");
speedy.addEventListener("click", function () {
  hideOtherImages(speedy);
});

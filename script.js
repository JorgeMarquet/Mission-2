console.log("this script is working-mission2");

console.log(document.querySelectorAll("img"));
console.log(document.querySelectorAll("img").length);

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
      // Delay the hiding of the image
      setTimeout(function () {
        image.style.display = "none";
      }, 0);
    }
  }

  // Update the answer and description based on the clicked image
  const answerElement = document.getElementById("header");
  const subHeaderElement = document.getElementById("subHeader");
  const descriptionElement = document.querySelector(".description");

  if (clickedImage === dante) {
    answerElement.textContent =
      "Correct answer! Dante Granados is Jorge's favorite guitar player from Mexico.";
    subHeaderElement.textContent = "";
    descriptionElement.textContent =
      "Dante Granados is the lead guitarist from Mexican heavy metal band “Anima Tempo”. Dante possesses a versatile style of playing which includes techniques like alternate picking, hybrid picking, sweep picking, tapping, etc. He is considered a “guitar shredder” in the metal scene due to his speed of playing. If you like heavy metal music, check his band out! ";
  } else if (clickedImage === santo) {
    answerElement.textContent = "Incorrect answer! This is El Santo";
    subHeaderElement.textContent = "";
    descriptionElement.textContent =
      "El Santo is a Mexican icon who is very beloved in the Mexican modern culture. His prime was between the 1960s and 1970s. While fought with many foes in all his movies (werewolves, mommies, vampires, zombies), he unfortunately never fought in the music realm.";
  } else if (clickedImage === zapata) {
    answerElement.textContent = "Incorrect answer! This is Emiliano Zapata";
    subHeaderElement.textContent = "";
    descriptionElement.textContent =
      "Emiliano Zapata, along with Pancho Villa was one of the main characters that led the Mexican revolution in the early twentieth century. His well-known moustache captured in the history books is what up to this date probably makes many people think that all Mexican men wear a moustache. Fun fact: Jorge cannot grow a proper moustache, shameful… ";
  } else if (clickedImage === speedy) {
    answerElement.textContent = "Incorrect answer! This is Speedy Gonzales";
    subHeaderElement.textContent = "";
    descriptionElement.textContent =
      "Speedy Gonzales to begin with, is not considered part of the Mexican culture as it was created by Warner Bros in United States so just for that, it cannot be considered a “Mexican guitarist”. Speedy Gonzalez does appear playing guitar in one of his episodes so he could probably challenge the fastest guitar players out there. Only if he was real... ";
  }
  // Apply colorization to the clicked image
  clickedImage.style.filter = "grayscale(0%)";

  // Update the button text to "Try again"
  const button = document.getElementById("button");
  button.textContent = "Try again!";
}

const button = document.getElementById("button");

button.addEventListener("click", function () {
  // Reset the page by reloading it
  location.reload();
});

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

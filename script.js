console.log("this script is working-mission2");

const text = document.getElementById("header");

text.addEventListener("click", function () {
  text.textContent = "You have changed this text with a click";
});

// DANTE
const dante = document.querySelector(".dante");
dante.addEventListener("click", function () {
  dante.classList.add("hidden");
  setTimeout(function () {
    dante.style.display = "none";
  }, 500); // Adjust the delay (in milliseconds) as needed
});

// SANTO
const santo = document.querySelector(".santo");
santo.addEventListener("click", function () {
  santo.classList.add("hidden");
  setTimeout(function () {
    santo.style.display = "none";
  }, 1000); // Adjust the delay (in milliseconds) as needed
});

// ZAPATA
const zapata = document.querySelector(".zapata");
zapata.addEventListener("click", function () {
  zapata.classList.add("hidden");
  setTimeout(function () {
    zapata.style.display = "none";
  }, 1000); // Adjust the delay (in milliseconds) as needed
});

// SPEEDY GONZALEZ
const speedy = document.querySelector(".gonzalez");
speedy.addEventListener("click", function () {
  speedy.classList.add("hidden");
  setTimeout(function () {
    speedy.style.display = "none";
  }, 500); // Adjust the delay (in milliseconds) as needed
});

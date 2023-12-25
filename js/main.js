document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the "blured" class
  var bluredElements = document.querySelectorAll(".blured");

  // Add a click event listener to each element
  bluredElements.forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the link
      alert("Coming soon"); // Show an alert when clicked
    });
  });
});

console.log("Hello from main.js!");

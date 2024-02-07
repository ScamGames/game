document.addEventListener("DOMContentLoaded", function () {
  var blurredElements = document.querySelectorAll(".blured");

  blurredElements.forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Coming soon");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var blurredElements = document.querySelectorAll(".blurred");

  blurredElements.forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      Toastify({
        text: "Coming soon",
        destination:
          "https://www.instagram.com/skam.cards?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        duration: 300,
        position: "center",
        style: {
          background: "#d3414d",
          borderRadius: "10px",
          padding: "10px 20px",
        },
      }).showToast();
    });
  });
});

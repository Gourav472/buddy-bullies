function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
  }

//   document.addEventListener("DOMContentLoaded", function () {
//     window.addEventListener("load", function () {
//       setTimeout(function () {
//         let loadingOverlay = document.getElementById("loadingOverlay");
//         loadingOverlay.style.display = "none";
//         document.querySelector("body").classList.remove("overflow_hidden");
//       }, 3000);
//     });
//   });
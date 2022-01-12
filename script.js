let video1 = document.querySelector("#video001");
let video2 = document.querySelector("#video002");

video1.addEventListener("click", function () {
  this.requestFullscreen();
});
video2.addEventListener("click", function () {
  this.requestFullscreen();
});

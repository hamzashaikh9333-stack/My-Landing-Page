let Main = document.querySelector("#main");
let crsr = document.querySelector("#cursor");
let Hero = document.querySelector("#hero");
let crsrImage = document.querySelector("#cursor-img");

Main.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsrImage.style.left = dets.x + "px";
  crsrImage.style.top = dets.y + "px";
});

Hero.addEventListener("mouseenter", function () {
  crsr.style.display = "none";
  crsrImage.style.display = "block";
});
Hero.addEventListener("mouseleave", function () {
  crsr.style.display = "block";
  crsrImage.style.display = "none";
});

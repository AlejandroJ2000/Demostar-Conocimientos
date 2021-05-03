let chairImage = document.querySelector(".armChair");
let grayCircle = document.querySelector(".flex-item__colors__object:first-child");
let brownCircle  = document.querySelector(".flex-item__colors__object:nth-child(2)");
let blueCircle = document.querySelector(".flex-item__colors__object:nth-child(3)");
let yellowCircle = document.querySelector(".flex-item__colors__object:last-child");

grayCircle.addEventListener("click", () =>{
  chairImage.src= "img/chairImage1.png";
});
brownCircle.addEventListener("click", () =>{
  chairImage.src= "img/chairImage2.jpg";
});
blueCircle.addEventListener("click", () =>{
  chairImage.src= "img/chairImage3.png";
});
yellowCircle.addEventListener("click", () =>{
  chairImage.src= "img/chairImage4.jpg";
});

const leftArrow = document.querySelector("#leftArrowChange");
const rightArrow = document.querySelector("#rightArrowChange");

const imgs = [
  "img/chairImage1.png",
  "img/chairImage2.jpg",
  "img/chairImage3.png",
  "img/chairImage4.jpg"
];

const last = imgs.length - 1;

let selected = 2;
chairImage.src = imgs[selected];

rightArrowChange.addEventListener("click", () => {
  selected = (selected < last) ? selected + 1 : 0;
  chairImage.src = imgs[selected];
});


leftArrowChange.addEventListener("click", () => {
  selected = (selected > 0) ? selected - 1 : last;
  chairImage.src = imgs[selected];
});

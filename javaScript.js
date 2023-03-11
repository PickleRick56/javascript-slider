let position = 0;
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let slider = document.querySelector(".slider");
let dots = document.querySelector(".dots");
let linksDirectSelection = document.querySelector(".linksDirectSelection");

const imageCollection = [
  "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRRv9ICxXjK-LVFv-lKRId6gB45BFoNCLsZ4dk7bZpYGblPLPG-9aYss0Z0wt2PmWDb",
  "http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
  "https://media.npr.org/assets/img/2022/11/01/gettyimages-1189806758_custom-0a0266b3e82cfd9a1bb6016795a1a51b87277273.jpg",
];

slider.style.backgroundImage =
  "url('http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRRv9ICxXjK-LVFv-lKRId6gB45BFoNCLsZ4dk7bZpYGblPLPG-9aYss0Z0wt2PmWDb')";

right.addEventListener("click", forward);
left.addEventListener("click", backward);
function forward() {
  position += 1;
  if (position > imageCollection.length - 1) {
    position = 0;
    slider.style.backgroundImage = `url(${imageCollection[position]})`;
  } else {
    slider.style.backgroundImage = `url(${imageCollection[position]})`;
  }
}

function backward() {
  position -= 1;
  if (position < 0) {
    position = imageCollection.length - 1;
    slider.style.backgroundImage = `url(${imageCollection[position]})`;
  } else {
    slider.style.backgroundImage = `url(${imageCollection[position]})`;
  }
}

function directSelection(evt) {
  let index = evt.target.className;
  index = index.slice(-1);
  position = index;
  slider.style.backgroundImage = `url(${imageCollection[position]})`;
}

dots.addEventListener("click", directSelection, false);
linksDirectSelection.addEventListener("click", directSelection, false);

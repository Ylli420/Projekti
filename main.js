

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


alert("Welcome to our page");

// const items = document.querySelectorAll('.card');

// document.querySelector('#breakfastBtn').addEventListener('click', function() {
//     items.forEach(item => {
//         // console.log(item);
//         if (item.id != 'breakfast') {
//             item.style.display = 'none';
//         } else {
//             item.style.display = 'grid';
//         }
//     });
// });
// document.querySelector('#lunchBtn').addEventListener('click', function() {
//     items.forEach(item => {
//         // console.log(item);
//         if (item.id != 'lunch') {
//             item.style.display = 'none';
//         } else {
//             item.style.display = 'grid';
//         }
//     });
// });
// document.querySelector('#shakesBtn').addEventListener('click', function() {
//     items.forEach(item => {
//         // console.log(item);
//         if (item.id != 'shakes') {
//             item.style.display = 'none';
//         } else {
//             item.style.display = 'grid';
//         }
//     });
// });
// document.querySelector('#dinnerBtn').addEventListener('click', function() {
//     items.forEach(item => {
//         // console.log(item);
//         if (item.id != 'dinner') {
//             item.style.display = 'none';
//         } else {
//             item.style.display = 'grid';
//         }
//     });
// });

// document.querySelector('#allBtn').addEventListener('click', function() {
//     items.forEach(element => {
//         element.style.display = 'grid';
//     });
// })

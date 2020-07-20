// Script for hover effects on img wrapper backgrounds - darken
const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

portfolioItems.forEach(portfolioItem => {
  portfolioItem.addEventListener('mouseover', () => {
     console.log(portfolioItem.childNodes);
     portfolioItem.childNodes[1].classList.add('hover-darken');
  })
  portfolioItem.addEventListener('mouseout', () => {
    portfolioItem.childNodes[1].classList.remove('hover-darken');
  });
});
//sticky nav bar
// window.onscroll = function() {myFunction()};
//
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
//
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

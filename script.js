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

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



function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "nav-wrapper") {
    x.className += " responsive";
  } else {
    x.className = "nav-wrapper";
  }
}




function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

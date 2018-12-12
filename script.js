
var winWidth = window.outerWidth;
console.log('winWidth is ' + winWidth);

window.onload = function() { getInitialSize() };

//sticky navbar
window.onscroll = function() { stickyNavbar() };

var navbar = document.getElementById( "navbar" );
var sticky = navbar.offsetTop;
var height = navbar.offsetHeight + "px";

//onclick event to display the hidden div
function hideUnhide() {
  var x = document.getElementById("gift-options");
      if (x.style.display == "none" || x.style.display == "") {
          x.style.display = "block";
          location.href='#gift-options';
      } else {
          x.style.display = "none";
      }
  }

function getInitialSize() {
  if (winWidth >= 1240) {
    toggleContainer();
  }
}

function stickyNavbar() {
  if ( window.pageYOffset > sticky) {
    navbar.classList.add( 'sticky' );
    document.body.style.paddingTop = navbar.offsetHeight + 'px';

  } else {
    document.body.style.paddingTop = 0;
    navbar.classList.remove( 'sticky' );
  }
}

//change toggle from container-fluid to container;
function toggleContainer() {
  var section = document.getElementsByClassName('section');
  for (var i =0; i<section.length; i++){
    section[i].classList.remove("container-fluid");
    section[i].classList.add( "container" );
  }
}

//change toggle from container to container-fluid;
function toggleContainerFluid() {
  var section = document.getElementsByClassName('section');
  for (var i =0; i<section.length; i++){
    section[i].classList.remove("container");
    section[i].classList.add( "container-fluid" );
  }
}


//function to get the size of the window every time the window is resized
function getSize() {
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.outerWidth;
      y = w.outerHeight;
      console.log(x + ' × ' + y);

//verify if window is bigger than 1440px
    if (x >= 1440){
      toggleContainer();
    } else {
      toggleContainerFluid();
    }

}







// -----------------------------------------------------------------------------
//Button lista de presentes

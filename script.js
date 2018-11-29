//sticky navbar

window.onscroll = function() { myFunction() };

var navbar = document.getElementById( "navbar" );
var sticky = navbar.offsetTop;
var height = navbar.offsetHeight + "px";

function myFunction() {
  if ( window.pageYOffset > sticky ) {
    navbar.classList.add( "sticky" );
    // var w = window.innerWidth;
    // navbar.style.width = w + "px";
  } else {
    navbar.classList.remove( "sticky" );
  }
}

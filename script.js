//sticky navbar

window.onscroll = function() { myFunction() };

var navbar = document.getElementById( "navbar" );
var sticky = navbar.offsetTop;
var height = navber.offsetHeight + "px";

function myFunction() {
  if ( window.pageYOffset > sticky ) {
    navbar.classList.add( "sticky" );
  } else {
    navbar.classList.remove( "sticky" );
  }
}

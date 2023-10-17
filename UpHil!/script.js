window.onload=function(){
    const img = document.getElementById('myImage');
const nav = document.getElementById('myNav');

let navVisible = false;

img.addEventListener('click', function() {
  if (navVisible) {
    nav.style.display = 'none';
    navVisible = false;
  } else {
    nav.style.display = 'flex';
    navVisible = true;
  }
});
  }

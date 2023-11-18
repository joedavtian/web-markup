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

  // Whith the help of AI I implemented the code for cookies. 
  document.addEventListener("DOMContentLoaded", function () {
    var cookiePopup = document.getElementById("cookie-popup");
    var acceptButton = document.querySelector("#cookie-popup button");

    var isCookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (!isCookiesAccepted) {
        cookiePopup.style.display = "block";
    }

    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        hideCookiePopup();
    });
});

function hideCookiePopup() {
    document.getElementById("cookie-popup").style.display = "none";
}
// navbar hide on scroll
var prevScrollPos = window.pageYOffset
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  if (currentScrollPos > 50) {
    if (prevScrollPos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0'
    } else {
      document.getElementById('navbar').style.top = '-100px'
    }
    prevScrollPos = currentScrollPos
  }
}

console.log('navbar.js is loaded!');

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.addEventListener('scroll', function() {
  let header = document.querySelector('header')
  header.classList.toggle('scrolling-on', window.scrollY > 0)
})
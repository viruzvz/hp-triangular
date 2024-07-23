// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import '/src/js/lightbox.js'

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.addEventListener('scroll', function() {
  let header = document.querySelector('header')
  header.classList.toggle('scrolling-on', window.scrollY > 0)
})

// Observa o contador, quando é visto inicia a contagem
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".status-fire-js")

    if (entry.isIntersecting) {
      square.classList.add("animation")
      return // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("animation")
  })
})

let elements = document.querySelectorAll(".count-wrapper")
for (let element of elements) {
  observer.observe(element)
}

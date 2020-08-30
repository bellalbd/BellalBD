$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
})
$(document).ready(function() {
  var owl = $('.owl-carousel-2');
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  })
})



        // Responsive navigation 

const humberger = document.querySelector('.responsive-nav')
const nav = document.querySelector('.nav-items')     


humberger.addEventListener('click',function(){
  nav.classList.toggle('nav-items-collapse')
})
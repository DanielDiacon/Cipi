// menu burger <=>
let body = document.querySelector('body');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.onclick = function () {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
};
document.onclick = function (e) {
   if (e.target.id !== 'burger' && e.target.classList !== 'menu' && e.target.id !== 'logo') {
      burger.classList.remove('active');
      menu.classList.remove('active');
      body.classList.remove('lock');
   }
};

// header show <=>
var lastScrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener("scroll", function () {
   var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop) {
      navbar.style.top = '-80px'
   } else {
      navbar.style.top = '0'
   }
   lastScrollTop = scrollTop;
});

// loading page <=>
const loader = document.getElementById("loader");
window.addEventListener("load", function () {
   loader.style.display = "none";
});

// swiper slider

new Swiper('.swiper-container', {
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});
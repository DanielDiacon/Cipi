// dropdown portofolio
let submenu = document.getElementById('submenu');
let dropdown = document.getElementById('dropdown');
let dropdownMenu = document.getElementById('dropdownMenu');
dropdown.onclick = function () {
   dropdownMenu.classList.toggle('active');
   dropdown.classList.toggle('active');
   submenu.classList.toggle('active');

};

// menu burger <=>
let body = document.querySelector('body');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.onclick = function () {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
   dropdownMenu.classList.remove('active');
   dropdown.classList.remove('active');
   submenu.classList.remove('active');
};
document.onclick = function (e) {
   if (e.target.id !== 'burger' 
   && e.target.classList !== 'menu' 
   && e.target.id !== 'logo'
   && e.target.id !== 'submenu'
   && e.target.id !== 'dropdown'
   && e.target.id !== 'dropdownMenu'
   ) {
      burger.classList.remove('active');
      menu.classList.remove('active');
      body.classList.remove('lock');
      dropdownMenu.classList.remove('active');
      dropdown.classList.remove('active');
      submenu.classList.remove('active');
   }
};

// header show <=>
var lastScrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener("scroll", function () {
   var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop) {
      navbar.style.top = '-80px'
      dropdownMenu.classList.remove('active');
      dropdown.classList.remove('active');
      submenu.classList.remove('active');
   } else {
      navbar.style.top = '0'
   }
   lastScrollTop = scrollTop;
});


// loading page <=>
const loader = document.getElementById("loader");
window.addEventListener("load", function () {
   loader.style.visibility = "hidden";
   loader.style.opacity = "0";
   loader.style.transition = "0.7s";
});

// popup <=>
// Open popup
document.querySelector(".btn").addEventListener("click", function () {
   document.querySelector(".popup").classList.add("active");
   document.documentElement.classList.add("hidden");
});

// Close popup when clicking on button
document.querySelector(".close").addEventListener("click", function () {
   document.querySelector(".popup").classList.remove("active");
   document.documentElement.classList.remove("hidden");
});

// Close menu when clicking outside the element area
document.addEventListener("click", (e) => {
   const withinBoundaries =
      e.composedPath().includes(document.querySelector(".inner")) ||
      e.composedPath().includes(document.querySelector(".btn")) ||
      e.composedPath().includes(document.querySelector(".close"));

   if (!withinBoundaries) {
      document.querySelector(".popup").classList.remove("active");
   }
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



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


//  animation for scroll <=>
//ScrollOut({
//   targets: '.title , .text , .block'
//});


// loading page <=>
const loader = document.getElementById("loader");
window.addEventListener("load", function () {
   loader.style.display = "none";
});


// 100vh form mobile <=>
const documentHeight = () => {
   const doc = document.documentElement
   doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', documentHeight)
documentHeight()

//smooth scroll <=>
window.addEventListener('scroll', e => {
   document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
   wrapper: '.smooth-wrapper',
   content: '.smooth-content',
   smooth: 0.7,
})
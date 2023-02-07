// menu burger <=>
//let body = document.querySelector('body');
//const burger = document.getElementById('burger');
//const menu = document.getElementById('menu');
//const logo = document.getElementById('logo');
//logo.onclick = function () {
//   logo.classList.toggle('active');
//};
//burger.onclick = function () {
//   burger.classList.toggle('active');
//   menu.classList.toggle('active');
//};
//document.onclick = function (e) {
//   if (e.target.id !== 'burger' && e.target.classList !== 'menu' && e.target.id !== 'logo') {
//      burger.classList.remove('active');
//      menu.classList.remove('active');
//   }
//};


// header show <=>
//var lastScrollTop = 0;
//   navbar = document.getElementById('navbar');
//window.addEventListener("scroll" , function(){
//   var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
//   if (scrollTop > lastScrollTop){
//      navbar.style.top='-50px'
//   } else {
//      navbar.style.top='0'
//   }
//   lastScrollTop = scrollTop;
//});


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
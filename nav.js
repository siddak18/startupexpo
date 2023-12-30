const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));


function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
}


var lastScrollTop;
const navbar = document.getElementById('nav');
window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-6rem';
  }
  else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY < 100) { // Adjust the scroll height as needed (100vh in this case)
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});
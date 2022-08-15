function replace(hide, hide2, show) {
  document.getElementById(hide).style.display = "none";
  document.getElementById(hide2).style.display = "none";
  document.getElementById(show).style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById('navbar_top');

  window.addEventListener('scroll', function () {

      if (window.scrollY > (navbar.clientHeight)) {
          navbar.classList.add('sticky');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;

      } else {
          navbar.classList.remove('sticky');
          // remove padding top from body

      }
      if (window.scrollY > ((navbar.clientHeight * 3))) {
          navbar.classList.add('inView');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;

      } else {
          navbar.classList.remove('inView');
          // remove padding top from body

      }
  });
});


$(document).ready(function () {
  $('.nav li a').click(function (e) {
    $('.nav li.active').removeClass('active');
    var $parent = $(this).parent();
    $parent.addClass('active');
    e.preventDefault();
  });
});


AOS.init();

// You can also pass an optional settings object
// below listed default settings
document.querySelector('#navbar').addEventListener('click', ({currentTarget}) => {
  currentTarget.classList.toggle('opened');
  currentTarget.classList.toggle('closed');
  const menuItems = currentTarget.querySelectorAll('.menu-item');
  menuItems.forEach(element => {
      if(!element.classList.contains('main')) {
          element.classList.toggle('hidden');
      }
  });
});


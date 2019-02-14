document.addEventListener('DOMContentLoaded', function() {
  var header = document.getElementById('header');
  var barContainer = document.getElementById('bar-container');
  var aside = document.getElementById('aside');
  var asideBackground = document.getElementById('aside-background');
  var footer = document.getElementById('footer');
  var scrollElement = document.documentElement;

  var activeToggle = function() {
    header.classList.toggle('active');
    barContainer.classList.toggle('active');
    aside.classList.toggle('active');
    asideBackground.classList.toggle('active');
  }

  var scrollToggle = function() {
    if (scrollElement.scrollTop > 400 || scrollElement.scrollTop > 400) {
      header.classList.add('scroll');
      barContainer.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
      barContainer.classList.remove('scroll');
    }
  }

  var footerToggle = function() {
    var scrollY = window.scrollY || pageYOffset;
    if (scrollElement.scrollHeight - 30 <= window.innerHeight + scrollY) {
      footer.classList.add('active');
    } else {
      footer.classList.remove('active');
    }
  }

  if (scrollElement.scrollHeight - 30 <= window.innerHeight + (window.scrollY || pageYOffset)) {
    footer.classList.add('active');
  }
  
  barContainer.addEventListener('click', activeToggle);
  asideBackground.addEventListener('click', activeToggle);

  window.onscroll = function() {
    scrollToggle();
    footerToggle();
  }
});
//Site header backdrop ved Scroll.
window.addEventListener('scroll', function() {
    var header = document.getElementById('site-header');
    if (window.scrollY > 600) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


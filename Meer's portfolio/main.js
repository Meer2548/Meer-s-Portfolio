const navLinks = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');

  function toggleMenu() {
    hamburger.classList.toggle('active');

    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      navLinks.classList.add('fade-out');
      setTimeout(() => {
        navLinks.classList.remove('fade-out');
      }, 300); // match animation duration
    } else {
      navLinks.classList.add('show');
    }
  }

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    const isClickInside = navLinks.contains(e.target) || hamburger.contains(e.target);
    if (!isClickInside && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      navLinks.classList.add('fade-out');
      hamburger.classList.remove('active');
      setTimeout(() => {
        navLinks.classList.remove('fade-out');
      }, 300);
    }
  });
// back to top btn

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // Fade out when not in view
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Smooth scrolling for navbar links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  
 


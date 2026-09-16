// ============================================
// Shared JS for Tianjin Lianhe Youxiang Website
// ============================================

// Navigation scroll effect
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect on header
  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  handleScroll();
  window.addEventListener('scroll', handleScroll);

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
      const expanded = navToggle.classList.contains('open');
      navToggle.setAttribute('aria-expanded', expanded);
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
      }
    });
  }

  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Basic validation
      const name = contactForm.querySelector('input[name="name"]').value.trim();
      const email = contactForm.querySelector('input[name="email"]').value.trim();
      const message = contactForm.querySelector('textarea[name="message"]').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Show success message
      contactForm.style.display = 'none';
      formSuccess.classList.add('show');

      // Scroll to success message
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // Product detail - thumbnail switching
  const thumbs = document.querySelectorAll('.product-thumb');
  const mainImage = document.querySelector('.product-main-image img');

  if (thumbs.length && mainImage) {
    thumbs.forEach(function(thumb) {
      thumb.addEventListener('click', function() {
        thumbs.forEach(function(t) { t.classList.remove('active'); });
        thumb.classList.add('active');
        var imgSrc = thumb.querySelector('img').src;
        mainImage.src = imgSrc;
      });
    });
  }

  // Hero carousel autoplay
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');

  if (heroSlides.length > 1) {
    let currentSlide = 0;
    const slideCount = heroSlides.length;
    const intervalTime = 5000; // 5 seconds

    function goToSlide(index) {
      heroSlides[currentSlide].classList.remove('active');
      heroDots[currentSlide].classList.remove('active');
      currentSlide = (index + slideCount) % slideCount;
      heroSlides[currentSlide].classList.add('active');
      heroDots[currentSlide].classList.add('active');
    }

    // Auto play
    let slideInterval = setInterval(function() {
      goToSlide(currentSlide + 1);
    }, intervalTime);

    // Dot click
    heroDots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        clearInterval(slideInterval);
        goToSlide(index);
        slideInterval = setInterval(function() {
          goToSlide(currentSlide + 1);
        }, intervalTime);
      });
    });
  }

  // Product detail inquiry form
  const detailInquiryForm = document.getElementById('detail-inquiry-form');
  const detailInquirySuccess = document.getElementById('detail-inquiry-success');

  if (detailInquiryForm && detailInquirySuccess) {
    detailInquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = detailInquiryForm.querySelector('input[name="name"]').value.trim();
      const email = detailInquiryForm.querySelector('input[name="email"]').value.trim();
      const message = detailInquiryForm.querySelector('textarea[name="message"]').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      detailInquiryForm.style.display = 'none';
      detailInquirySuccess.classList.add('show');
      detailInquirySuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        const isOpen = item.classList.contains('open');
        // Close all
        faqItems.forEach(function(i) { i.classList.remove('open'); });
        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe animateable elements
  document.querySelectorAll('.product-card, .advantage-card, .certificate-card, .cert-page-card, .factory-stat, .timeline-item').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

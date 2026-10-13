// ============================================
// Shared JS for Tianjin Orient Natural Cosmetics Co., Ltd.  Website
// ============================================

// ---------- Inquiry delivery (FormSubmit.co, no backend needed) ----------
// Inquiries are forwarded to this mailbox. Change the address here only.
var INQUIRY_ENDPOINT = 'https://formsubmit.co/ajax/shugia@shugiahome.com';

function collectFormData(form) {
  var payload = {};
  Array.prototype.forEach.call(form.elements, function(el) {
    if (!el.name || el.disabled || el.type === 'submit' || el.type === 'button') return;
    if (el.name === '_honey') { if (el.checked) payload[el.name] = el.value; return; } // honeypot must stay empty for real users
    if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) return;
    payload[el.name] = el.value.trim ? el.value.trim() : el.value;
  });
  return payload;
}

function showFormError(form, message) {
  var box = form.querySelector('.form-error-note');
  if (!box) {
    box = document.createElement('p');
    box.className = 'form-error-note';
    box.setAttribute('style', 'margin:1rem 0 0;padding:0.9rem 1rem;border-radius:4px;background:#FDF3F3;border:1px solid #F0C7C7;color:#9B2C2C;font-size:0.9rem;line-height:1.6;');
    form.appendChild(box);
  }
  box.textContent = message;
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function sendInquiry(form, successEl, subjectText) {
  var payload = collectFormData(form);
  payload._subject = subjectText;
  payload._template = 'table';

  // Local preview (file:// or localhost) cannot deliver mail — show success UI only.
  if (location.protocol === 'file:' || /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) {
    console.warn('[inquiry] local preview: form delivery skipped. It will submit for real once the site is deployed to your domain.');
    form.style.display = 'none';
    successEl.classList.add('show');
    successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return Promise.resolve();
  }

  var btn = form.querySelector('button[type="submit"]');
  var label = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = 'Sending…';
  }

  return fetch(INQUIRY_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(function(res) {
      return res.json().then(function(data) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return data;
      }, function() {
        throw new Error('HTTP ' + res.status);
      });
    })
    .then(function(data) {
      // FormSubmit returns strings: { success: "true" | "false", message: "..." }
      if (!data || data.success === false || data.success === 'false') {
        throw new Error((data && data.message) ? data.message : 'submission failed');
      }
      form.style.display = 'none';
      successEl.classList.add('show');
      successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
    .catch(function(err) {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = label;
      }
      showFormError(
        form,
        'Your inquiry could not be sent right now (' + err.message + '). Please email shugia@shugiahome.com or chat on WhatsApp +86 186 2202 3128 — we reply within 24 hours.'
      );
    });
}

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

      sendInquiry(contactForm, formSuccess, 'Website Inquiry - ' + name);
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

      const productField = detailInquiryForm.querySelector('input[name="product"]');
      const productName = productField && productField.value.trim()
        ? productField.value.trim()
        : (document.getElementById('productTitle') || {}).textContent || 'Product';

      sendInquiry(detailInquiryForm, detailInquirySuccess, 'Product Inquiry - ' + productName + ' - ' + name);
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

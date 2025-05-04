// Sticky Header
window.addEventListener('scroll', function() {
  const header = document.querySelector('.sticky-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
        navbarCollapse.classList.remove('show');
      }
    });
  }
});

// Portfolio Filtering
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Fancybox
  Fancybox.bind("[data-fancybox]", {
    // Custom options
    Thumbs: {
      type: "classic",
    },
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  });

  // Portfolio Filtering
  const filters = document.querySelectorAll('#filters .nav-link');
  const gridItems = document.querySelectorAll('.grid-item');

  filters.forEach(filter => {
    filter.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all filters
      filters.forEach(f => f.classList.remove('active'));
      
      // Add active class to clicked filter
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      gridItems.forEach(item => {
        if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 100);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Initialize Isotope
  const grid = document.querySelector('.grid');
  if (grid) {
    const iso = new Isotope(grid, {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-item'
      }
    });

    // Filter items on click
    filters.forEach(filter => {
      filter.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
      });
    });
  }
});

// Skills Section Animations
document.addEventListener('DOMContentLoaded', function() {
  // Initialize progress bars
  const progressBars = document.querySelectorAll('.progress-bar');
  
  // Function to animate progress bars when they come into view
  const animateProgressBars = () => {
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight) && (rect.bottom >= 0);
      
      if (isVisible && !bar.classList.contains('animate-progress')) {
        const width = bar.getAttribute('aria-valuenow');
        bar.style.setProperty('--progress-width', `${width}%`);
        bar.classList.add('animate-progress');
      }
    });
  };

  // Initial check for progress bars in view
  animateProgressBars();

  // Check progress bars on scroll
  window.addEventListener('scroll', animateProgressBars);

  // Add hover effects to skill boxes
  const skillBoxes = document.querySelectorAll('.skill-box');
  
  skillBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    box.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Contact Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('form-status');
  const successMessage = document.getElementById('form-success');
  const errorMessage = document.getElementById('form-error');

  if (contactForm) {
    // Form validation
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Reset form status
      formStatus.style.display = 'none';
      successMessage.style.display = 'none';
      errorMessage.style.display = 'none';
      
      // Remove previous validation classes
      const formControls = contactForm.querySelectorAll('.form-control');
      formControls.forEach(control => {
        control.classList.remove('is-invalid');
      });
      
      // Validate form fields
      let isValid = true;
      const name = contactForm.querySelector('#name');
      const email = contactForm.querySelector('#email');
      const message = contactForm.querySelector('#message');
      
      if (!name.value.trim()) {
        name.classList.add('is-invalid');
        isValid = false;
      }
      
      if (!email.value.trim() || !isValidEmail(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
      }
      
      if (!message.value.trim()) {
        message.classList.add('is-invalid');
        isValid = false;
      }
      
      if (isValid) {
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual form submission)
        setTimeout(() => {
          formStatus.style.display = 'block';
          successMessage.style.display = 'block';
          contactForm.reset();
          submitButton.innerHTML = originalText;
          submitButton.disabled = false;
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            formStatus.style.display = 'none';
            successMessage.style.display = 'none';
          }, 5000);
        }, 1500);
      }
    });
    
    // Real-time validation
    const formControls = contactForm.querySelectorAll('.form-control');
    formControls.forEach(control => {
      control.addEventListener('input', function() {
        if (this.classList.contains('is-invalid')) {
          this.classList.remove('is-invalid');
        }
      });
    });
  }
  
  // Email validation helper
  function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
  
  // Animate contact items on scroll
  const contactItems = document.querySelectorAll('.contact-item');
  const contactFormWrapper = document.querySelector('.contact-form-wrapper');
  
  function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;
    
    contactItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }
    });
    
    if (contactFormWrapper) {
      const formTop = contactFormWrapper.getBoundingClientRect().top;
      if (formTop < triggerBottom) {
        contactFormWrapper.style.opacity = '1';
        contactFormWrapper.style.transform = 'translateY(0)';
      }
    }
  }
  
  // Initial check
  animateOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);
}); 
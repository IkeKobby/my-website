// Copyright year (auto-updates)
document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

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

// Skills section hover effects
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.skill-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    box.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Contact section scroll animation
document.addEventListener('DOMContentLoaded', function() {
  const contactItems = document.querySelectorAll('.contact-item');
  const contactInfo = document.querySelector('.contact-info-centered');

  function animateContactOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    contactItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }
    });

    if (contactInfo) {
      const infoTop = contactInfo.getBoundingClientRect().top;
      if (infoTop < triggerBottom) {
        contactInfo.style.opacity = '1';
        contactInfo.style.transform = 'translateY(0)';
      }
    }
  }

  if (contactItems.length) {
    contactItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    if (contactInfo) {
      contactInfo.style.opacity = '0';
      contactInfo.style.transform = 'translateY(20px)';
      contactInfo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }
    animateContactOnScroll();
    window.addEventListener('scroll', animateContactOnScroll);
  }
});

// Updates section
document.addEventListener('DOMContentLoaded', function() {
  // Handle "View All Updates" button
  const viewAllUpdatesBtn = document.getElementById('viewAllUpdates');
  if (viewAllUpdatesBtn) {
    viewAllUpdatesBtn.addEventListener('click', function() {
      const allUpdatesModal = new bootstrap.Modal(document.getElementById('allUpdatesModal'));
      allUpdatesModal.show();
    });
  }

  // Add hover animations to update cards
  const updateCards = document.querySelectorAll('.update-card');
  updateCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Add scroll animation for update cards
  function animateUpdateCards() {
    const updateCardsToAnimate = document.querySelectorAll('.update-card');
    
    updateCardsToAnimate.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight - 100) && (rect.bottom >= 0);
      
      if (isVisible && !card.classList.contains('animated')) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
          card.classList.add('animated');
        }, index * 200); // Stagger the animations
      }
    });
  }

  // Initialize update cards as hidden for animation
  const updateCardsForInit = document.querySelectorAll('.update-card');
  updateCardsForInit.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease';
  });

  // Check for update cards on scroll
  window.addEventListener('scroll', animateUpdateCards);
  animateUpdateCards(); // Run once on load

}); 
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenu = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  mobileMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      navbarMenu.classList.remove('active');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Back to top button
  const backToTopBtn = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });
  
  // Typed.js initialization
  const typed = new Typed('#typed-text', {
    strings: [
      'Full Stack Developer',
      'UI/UX Designer',
      'Web Designer',
      'Frontend Developer',
      'Backend Developer'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
  });
  
  // Particles.js initialization
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#6c63ff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#6c63ff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  // About Section Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      btn.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Skills Section Tabs
  const skillsTabs = document.querySelectorAll('.skills-tab');
  const skillsCategories = document.querySelectorAll('.skills-category');
  
  skillsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-category');
      
      // Remove active class from all tabs and categories
      skillsTabs.forEach(tab => tab.classList.remove('active'));
      skillsCategories.forEach(category => category.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding category
      tab.classList.add('active');
      document.getElementById(category).classList.add('active');
    });
  });
  
  // Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      // Remove active class from all buttons
      filterBtns.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
  // Project Carousel
  const carousels = document.querySelectorAll('.project-carousel');
  
  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    const prevBtn = carousel.parentElement.querySelector('.carousel-prev');
    const nextBtn = carousel.parentElement.querySelector('.carousel-next');
    
    let currentIndex = 0;
    
    // Show first image
    images[currentIndex].classList.add('active');
    
    // Next button
    nextBtn.addEventListener('click', () => {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    });
    
    // Previous button
    prevBtn.addEventListener('click', () => {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      images[currentIndex].classList.add('active');
    });
    
    // Auto-rotate carousel
    setInterval(() => {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }, 5000);
  });
  
  // Form label animation
  const formGroups = document.querySelectorAll('.form-group');
  
  formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const label = group.querySelector('label');
    
    // Check if input has value on page load
    if (input.value) {
      label.style.top = '-10px';
      label.style.left = '10px';
      label.style.fontSize = '0.8rem';
      label.style.backgroundColor = 'var(--bg-color)';
      label.style.padding = '0 5px';
      label.style.color = 'var(--primary-color)';
    }
    
    // Add event listeners
    input.addEventListener('focus', () => {
      label.style.top = '-10px';
      label.style.left = '10px';
      label.style.fontSize = '0.8rem';
      label.style.backgroundColor = 'var(--bg-color)';
      label.style.padding = '0 5px';
      label.style.color = 'var(--primary-color)';
    });
    
    input.addEventListener('blur', () => {
      if (!input.value) {
        label.style.top = '15px';
        label.style.left = '15px';
        label.style.fontSize = '1rem';
        label.style.backgroundColor = 'transparent';
        label.style.padding = '0';
        label.style.color = 'var(--text-light)';
      }
    });
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = this.querySelector('#name').value;
      const email = this.querySelector('#email').value;
      const subject = this.querySelector('#subject').value;
      const message = this.querySelector('#message').value;
      
      // Here you would typically send the form data to a server
      // For this example, we'll just log it and show an alert
      console.log({ name, email, subject, message });
      
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
      
      // Reset labels
      this.querySelectorAll('.form-group label').forEach(label => {
        label.style.top = '15px';
        label.style.left = '15px';
        label.style.fontSize = '1rem';
        label.style.backgroundColor = 'transparent';
        label.style.padding = '0';
        label.style.color = 'var(--text-light)';
      });
    });
  }
  
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });
  
  // Dark/Light Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply saved theme
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
  
  // Toggle theme function
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'light');
    }
    
    // Refresh particles.js to match new theme
    if (typeof pJSDom !== 'undefined' && pJSDom.length > 0) {
      pJSDom[0].pJS.fn.vendors.destroypJS();
      particlesJS('particles-js', {
        // Your particles.js config here (same as above)
        "particles": {
          // ... (same config as above)
        },
        "interactivity": {
          // ... (same config as above)
        }
      });
    }
  }
  
  // Add event listener to theme toggle button
  themeToggle.addEventListener('click', toggleTheme);
});



// Lightbox functionality
function initLightbox() {
  const imageLightbox = document.getElementById('imageLightbox');
  const videoLightbox = document.getElementById('videoLightbox');
  const closeButtons = document.querySelectorAll('.close-lightbox');
  
  // Open image lightbox
  document.querySelectorAll('.project-image img, .project-link[href$=".jpg"], .project-link[href$=".png"], .project-link[href$=".jpeg"]').forEach(element => {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      
      const imgSrc = this.getAttribute('src') || this.getAttribute('href');
      const imgAlt = this.getAttribute('alt') || 'Project image';
      
      const lightboxImg = imageLightbox.querySelector('img');
      lightboxImg.setAttribute('src', imgSrc);
      lightboxImg.setAttribute('alt', imgAlt);
      
      imageLightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Open video lightbox
  document.querySelectorAll('.project-link[href$=".mp4"], .project-link[href$=".webm"]').forEach(element => {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      
      const videoSrc = this.getAttribute('href');
      
      const lightboxVideo = videoLightbox.querySelector('video');
      lightboxVideo.querySelector('source').setAttribute('src', videoSrc);
      lightboxVideo.load();
      
      videoLightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close lightboxes
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      imageLightbox.classList.remove('active');
      videoLightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });
  
  // Close when clicking outside content
  [imageLightbox, videoLightbox].forEach(lightbox => {
    lightbox.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });
  
  // Close with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      imageLightbox.classList.remove('active');
      videoLightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}

// Call the function at the end of your DOMContentLoaded event
initLightbox();
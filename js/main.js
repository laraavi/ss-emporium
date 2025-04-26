document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
  
    function showSlide(index) {
      // Remove "active" from all
      slides.forEach((slide) => slide.classList.remove('active'));
      dots.forEach((dot) => dot.classList.remove('active'));
  
      // Add "active" to current
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
  
    // Click handlers
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(index);
      });
    });
  });
  
document.addEventListener('DOMContentLoaded', () => {
  const darkModeSwitch = document.getElementById('darkModeSwitch');
  const mobileMenu = document.getElementById('mobileMenu');

  function applyDarkMode(isEnabled) {
      if (isEnabled) {
          document.body.classList.add('dark-mode');
          mobileMenu.classList.add('dark-mode');
      } else {
          document.body.classList.remove('dark-mode');
          mobileMenu.classList.remove('dark-mode');
      }
  }

  // Check initial dark mode
  const darkModeEnabled = localStorage.getItem('dark-mode') === 'enabled';
  applyDarkMode(darkModeEnabled);

  // Button click
  darkModeSwitch.addEventListener('click', () => {
      const enabled = !document.body.classList.contains('dark-mode');
      applyDarkMode(enabled);

      if (enabled) {
          localStorage.setItem('dark-mode', 'enabled');
      } else {
          localStorage.removeItem('dark-mode');
      }
  });

  // When Offcanvas opens, apply dark mode
  const offcanvasElement = document.getElementById('mobileMenu');
  offcanvasElement.addEventListener('show.bs.offcanvas', () => {
      const darkModeEnabled = localStorage.getItem('dark-mode') === 'enabled';
      applyDarkMode(darkModeEnabled);
  });
});
////modal///
function openQuickView(productName) {
    const modal = document.getElementById('quickViewModal');
    document.getElementById('quickViewTitle').textContent = productName;
    modal.style.display = 'block';
  }
  
  function openOrderNow(productName) {
    const modal = document.getElementById('orderNowModal');
    document.getElementById('orderNowTitle').textContent = `Order: ${productName}`;
    modal.style.display = 'block';
  }
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
  }
  
  // Optional: Close modal if user clicks outside of modal content
  window.addEventListener('click', (e) => {
    const quickModal = document.getElementById('quickViewModal');
    const orderModal = document.getElementById('orderNowModal');
  
    if (e.target === quickModal) quickModal.style.display = 'none';
    if (e.target === orderModal) orderModal.style.display = 'none';
  });
  

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
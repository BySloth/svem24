function initVerticalScroll() {
  const optionContainer = document.querySelector('.pioption_container');
  const displayContainer = document.querySelector('.pioption_display');
  const options = document.querySelectorAll('.pioption_item');
  const displays = document.querySelectorAll('.pioption');
  
  let currentIndex = 0;
  const maxIndex = options.length - 1;
  let isAnimating = false;

  function updateActiveState(index) {
      options.forEach((option, i) => {
          option.classList.toggle('active', i === index);
      });
  }

  function animateDisplay(newIndex, oldIndex) {
      if (isAnimating || newIndex === oldIndex) return;
      isAnimating = true;

      const oldDisplay = displays[oldIndex];
      const newDisplay = displays[newIndex];
      
      // Determine direction (including wrap-around cases)
      const isMovingDown = (newIndex > oldIndex) || (newIndex === 0 && oldIndex === maxIndex);
      
      // Set initial states
      newDisplay.classList.remove('pioption-hidden');
      newDisplay.classList.add(isMovingDown ? 'enter-from-bottom' : 'enter-from-top');
      
      oldDisplay.classList.add(isMovingDown ? 'leave-to-top' : 'leave-to-bottom');
      
      // Trigger animation
      setTimeout(() => {
          oldDisplay.classList.remove('active');
          oldDisplay.classList.add('pioption-hidden');
          oldDisplay.classList.remove('leave-to-top', 'leave-to-bottom');
          
          newDisplay.classList.add('active');
          newDisplay.classList.remove('enter-from-bottom', 'enter-from-top');
          
          isAnimating = false;
      }, 600); // Matches your CSS transition duration of 0.6s
  }

  function scrollToSection(index) {
      if (!isAnimating) {
          const previousIndex = currentIndex;
          currentIndex = index;
          
          // Update options with smooth scroll
          updateActiveState(index);
          optionContainer.scrollTo({
              top: options[index].offsetTop - optionContainer.offsetTop,
              behavior: 'smooth'
          });
          
          // Animate display transition
          animateDisplay(index, previousIndex);
      }
  }

  // Mouse wheel handling with wrap-around
  function handleWheel(event) {
      event.preventDefault();
      if (isAnimating) return;
      
      if (event.deltaY > 0) {
          // Scroll down: if at last, go to first
          scrollToSection(currentIndex === maxIndex ? 0 : currentIndex + 1);
      } else if (event.deltaY < 0) {
          // Scroll up: if at first, go to last
          scrollToSection(currentIndex === 0 ? maxIndex : currentIndex - 1);
      }
  }

  // Click handling
  options.forEach((option, index) => {
      option.onclick = () => scrollToSection(index);
  });

  // Event listeners
  optionContainer.addEventListener('wheel', handleWheel);
  displayContainer.addEventListener('wheel', handleWheel);

  // Keyboard navigation with wrap-around
  document.addEventListener('keydown', (event) => {
      if (isAnimating) return;
      if (event.key === 'ArrowDown') {
          scrollToSection(currentIndex === maxIndex ? 0 : currentIndex + 1);
      } else if (event.key === 'ArrowUp') {
          scrollToSection(currentIndex === 0 ? maxIndex : currentIndex - 1);
      }
  });

  // Initial setup
  displays.forEach((display, i) => {
      if (i !== 0) {
          display.classList.add('pioption-hidden');
          display.classList.remove('active');
      }
  });
  options[0].classList.add('active');
  displays[0].classList.add('active');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initVerticalScroll);
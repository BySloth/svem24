let currentOption = 0;
    const options = document.querySelectorAll('.pioption');
    const optionItems = document.querySelectorAll('.pioption_item');
    let lastScrollTime = 0;
    let isAnimating = false;

    function showOption(index) {
      if (isAnimating) return;
      isAnimating = true;
      
      if (index > currentOption) {
        options[currentOption].classList.add('leave-to-top');
        options[index].classList.remove('enter-from-bottom');
      } else {
        options[currentOption].classList.add('leave-to-bottom');
        options[index].classList.remove('enter-from-top');
      }
      options[currentOption].classList.remove('active');
      options[index].classList.add('active');

      optionItems[currentOption].classList.remove('active');
      optionItems[index].classList.add('active');
      
      setTimeout(() => {
        options[currentOption].classList.remove('leave-to-top', 'leave-to-bottom');
        options[currentOption].classList.add(index > currentOption ? 'enter-from-top' : 'enter-from-bottom');
        currentOption = index;
        isAnimating = false;
      }, 600);
    }

    function nextOption() {
      showOption((currentOption + 1) % options.length);
    }

    function prevOption() {
      showOption((currentOption - 1 + options.length) % options.length);
    }

    window.addEventListener('wheel', (event) => {
      if (isAnimating) return;
      const currentTime = new Date().getTime();
      if (currentTime - lastScrollTime < 600) return;
      lastScrollTime = currentTime;

      if (event.deltaY > 0) {
        nextOption();
      } else {
        prevOption();
      }
    });
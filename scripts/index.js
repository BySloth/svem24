let stage = 1;
let isAnimating = false;

function changeStage(event) {
    if (isAnimating) return;
    isAnimating = true;
    setTimeout(() => { isAnimating = false; }, 400);

    if (event.deltaY > 0) {
        stage++;
    } else {
        stage--;
    }
    if (stage < 1) stage = 4;
    if (stage > 4) stage = 1;
    updateStage();
}

function updateStage() {
    const background = document.getElementById('background');
    const logo = document.getElementById('logo');
    const word1 = document.getElementById('word1');
    const word2 = document.getElementById('word2');
    const word3 = document.getElementById('word3');
    const textField2 = document.getElementById('textField2');
    const textField3 = document.getElementById('textField3');
    const textField4 = document.getElementById('textField4');

    // Reset all text fields
    textField2.classList.remove('text-field-visible');
    textField3.classList.remove('text-field-visible');
    textField4.classList.remove('text-field-visible');

    if (stage === 1) {
        background.style.backgroundImage = 'url("./pics/background1.jpg")';
        // background.classList.add('hidden');
        logo.classList.remove('hidden');  // Ensure logo is shown
        logo.classList.add('visible');
        word1.classList.remove('visible');
        word2.classList.remove('visible');
        word3.classList.remove('visible');
        word1.classList.add('hidden');
        word2.classList.add('hidden');
        word3.classList.add('hidden');
    } else if (stage === 2) {
        background.style.backgroundImage = 'url("./pics/background2.jpg")';
        word1.classList.add('visible');
        logo.classList.add('hidden');
        word2.classList.add('hidden');
        word3.classList.add('hidden');
        logo.classList.remove('visible');
        word2.classList.remove('visible');
        word3.classList.remove('visible');
        textField2.classList.add('text-field-visible');
    } else if (stage === 3) {
        logo.classList.remove('visible');
        logo.classList.add('hidden');
        background.style.backgroundImage = 'url("./pics/background3.jpg")';
        word2.classList.add('visible');
        textField3.classList.add('text-field-visible');

        
        word3.classList.remove('visible');
        word3.classList.add('hidden');
    } else if (stage === 4) {
        logo.classList.remove('visible');
        logo.classList.add('hidden');
        background.style.backgroundImage = 'url("./pics/background4.jpg")';
        word1.classList.add('visible');
        word2.classList.add('visible');
        word3.classList.add('visible');
        textField4.classList.add('text-field-visible');
    }
}

window.addEventListener('wheel', changeStage);
window.addEventListener('load', () => {
    updateStage();
});

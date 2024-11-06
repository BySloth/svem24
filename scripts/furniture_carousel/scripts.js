let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const indicators = document.querySelectorAll('.indicator');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
  const container = document.querySelector('.carousel-container');
  container.style.transform = `translateX(-${index * 100}%)`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function goToImage(index) {
  currentIndex = index;
  showImage(index);
}
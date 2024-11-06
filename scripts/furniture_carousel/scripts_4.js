let currentIndex_4 = 0;
const images_4 = document.querySelectorAll('.carousel-image_4');
const indicators_4 = document.querySelectorAll('.indicator_4');

function showImage_4(index) {
  images_4.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  indicators_4.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
  const container_4 = document.querySelector('.carousel-container_4');
  container_4.style.transform = `translateX(-${index * 100}%)`;
}

function nextImage_4() {
  currentIndex_4 = (currentIndex_4 + 1) % images_4.length;
  showImage_4(currentIndex_4);
}

function prevImage_4() {
  currentIndex_4 = (currentIndex_4 - 1 + images_4.length) % images_4.length;
  showImage_4(currentIndex_4);
}

function goToImage_4(index) {
  currentIndex_4 = index;
  showImage_4(index);
}

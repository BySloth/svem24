let currentIndex_1 = 0;
const images_1 = document.querySelectorAll('.carousel-image_1');
const indicators_1 = document.querySelectorAll('.indicator_1');

function showImage_1(index) {
  images_1.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  indicators_1.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
  const container_1 = document.querySelector('.carousel-container_1');
  container_1.style.transform = `translateX(-${index * 100}%)`;
}

function nextImage_1() {
  currentIndex_1 = (currentIndex_1 + 1) % images_1.length;
  showImage_1(currentIndex_1);
}

function prevImage_1() {
  currentIndex_1 = (currentIndex_1 - 1 + images_1.length) % images_1.length;
  showImage_1(currentIndex_1);
}

function goToImage_1(index) {
  currentIndex_1 = index;
  showImage_1(index);
}
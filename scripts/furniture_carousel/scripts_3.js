let currentIndex_3 = 0;
const images_3 = document.querySelectorAll('.carousel-image_3');
const indicators_3 = document.querySelectorAll('.indicator_3');

function showImage_3(index) {
  images_3.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  indicators_3.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
  const container_3 = document.querySelector('.carousel-container_3');
  container_3.style.transform = `translateX(-${index * 100}%)`;
}

function nextImage_3() {
  currentIndex_3 = (currentIndex_3 + 1) % images_3.length;
  showImage_3(currentIndex_3);
}

function prevImage_3() {
  currentIndex_3 = (currentIndex_3 - 1 + images_3.length) % images_3.length;
  showImage_3(currentIndex_3);
}

function goToImage_3(index) {
  currentIndex_3 = index;
  showImage_3(index);
}

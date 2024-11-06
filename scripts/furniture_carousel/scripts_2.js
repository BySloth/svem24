let currentIndex_2 = 0;
const images_2 = document.querySelectorAll('.carousel-image_2');
const indicators_2 = document.querySelectorAll('.indicator_2');

function showImage_2(index) {
  images_2.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  indicators_2.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
  const container_2 = document.querySelector('.carousel-container_2');
  container_2.style.transform = `translateX(-${index * 100}%)`;
}

function nextImage_2() {
  currentIndex_2 = (currentIndex_2 + 1) % images_2.length;
  showImage_2(currentIndex_2);
}

function prevImage_2() {
  currentIndex_2 = (currentIndex_2 - 1 + images_2.length) % images_2.length;
  showImage_2(currentIndex_2);
}

function goToImage_2(index) {
  currentIndex_2 = index;
  showImage_2(index);
}

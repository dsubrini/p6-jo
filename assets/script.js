const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];

const rightArrow = document.querySelector('.arrow_right');
const leftArrow = document.querySelector('.arrow_left');
const bannerImg = document.querySelector('.banner-img');
const bannerP = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');

let index = 0;

slides.forEach((_, i) => {
  const span = document.createElement('span');

  if (i === index) {
    span.classList.add('dot_selected');
  }

  span.classList.add('dot');
  dotsContainer.appendChild(span);
});

function updateDot() {
  const allDots = document.querySelectorAll('.dot');

  allDots.forEach((dot, i) => {
    dot.classList.remove('dot_selected');
    if (i === index) {
      dot.classList.add('dot_selected');
    }
  });
}

rightArrow.addEventListener('click', () => {
  index++;

  if (index > slides.length - 1) {
    index = 0;
  }

  bannerImg.src = './assets/images/slideshow/' + slides[index].image;
  bannerP.innerHTML = slides[index].tagLine;
  updateDot();
});

leftArrow.addEventListener('click', () => {
  index--;

  if (index < 0) {
    index = slides.length - 1;
  }

  bannerImg.src = './assets/images/slideshow/' + slides[index].image;
  bannerP.innerHTML = slides[index].tagLine;
  updateDot();
});

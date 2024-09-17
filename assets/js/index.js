import '../scss/style.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let burger = document.querySelector('.js-burger-menu');
let swiperEl = document.querySelector('.swiper');
let menu = document.querySelector('.js-menu');
let questionsList = document.querySelector('.js-questions-list');

// Swiper initialize
function initSwiper() {
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
      
        centeredSlides: true,
      
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          320: {
            slidesPerView: "1",
            spaceBetween: "10",
          },
          1024: {
            slidesPerView: "2",
            spaceBetween: "20",
          },
          1160: {
            slidesPerView: "3",
            spaceBetween: "35",
          },
        },
    });
}

swiperEl && initSwiper();

// Burger menu logic
burger.addEventListener('click', toggleBurgerMenuStatement)

function toggleBurgerMenuStatement() {
    menu.classList.toggle('show');
}


// Hint blocks logic

document.addEventListener('click', showHintBlock)

function showHintBlock(e) {
    catchElementAndToggleStatement(e, '.js-hint-block', '.js-hint', 'visually-hidden')
}

// Tooltips logic

questionsList.addEventListener('click', showTooltip)

function showTooltip(e) {
    catchElementAndToggleStatement(e, '.js-question-wrapper', '.js-answer-tooltip', 'visually-hidden');
    catchElementAndToggleStatement(e, '.js-question-wrapper', '.js-question-icon', 'rotate')
}


// util function for show\hide elements

function catchElementAndToggleStatement(e, parentClass, childClass, classForToggle) {
    const target = e.target;
    const parentBlock = target.closest(parentClass);

    if (parentBlock) {
        let hiddenEl = parentBlock.querySelector(childClass);
        hiddenEl.classList.toggle(classForToggle);
    }
}
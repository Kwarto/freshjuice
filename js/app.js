const preLoader = document.querySelector('#preloader');
const mainContainer = document.querySelector('.home__container');
window.addEventListener('load', () => {
    mainContainer.style.display = 'none';
    this.window.setTimeout((load) => {
    preLoader.style.width = '0px';
    mainContainer.style.display = 'block';
},3000);
});

// navigation responsiveness

const navItems = document.querySelector('.nav__items');
const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burgerClose');

burger.addEventListener('click', () => {
    navItems.style.display = 'flex';
    burger.style.display = 'none';
    burgerClose.style.display = 'block';
});

burgerClose.addEventListener('click', () => {
    navItems.style.display = 'none';
    burger.style.display = 'block';
    burgerClose.style.display = 'none';
});

const firstReview = document.querySelector('.first_review');
const secondReview = document.querySelector('.second_review');
const thirdReview = document.querySelector('.third_review');

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

one.addEventListener('click', () => {
    firstReview.style.display = 'block';
    secondReview.style.display = 'none';
    thirdReview.style.display = 'none';  
});

two.addEventListener('click', () => {
    firstReview.style.display = 'none';
    secondReview.style.display = 'block';
    thirdReview.style.display = 'none';  
});

three.addEventListener('click', () => {
    firstReview.style.display = 'none';
    secondReview.style.display = 'none';
    thirdReview.style.display = 'block';  
});



const imgOne = document.querySelector('.img-0');

function changeBgColor () {
    imgOne.style.backgroundColor = 'orange';
}

imgOne.addEventListener("mouseover", changeBgColor);
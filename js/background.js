import { getTimeOfDay } from "./greeting.js";

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

let randomNum = getRandomNum(1, 21);

function setBG() {
    const body = document.querySelector('body');
    const timeOfDay = getTimeOfDay();
    randomNum = randomNum + '';
    let bgNum = randomNum.padStart(2, 0);
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/v154254/momentum-images/assets/images/${timeOfDay}/${bgNum}.webp`; 
    img.onload = () => {      
      body.style.backgroundImage = `url('https://raw.githubusercontent.com/v154254/momentum-images/assets/images/${timeOfDay}/${bgNum}.webp')`;
    }; 
};

export function getSlideNext() {
    if (github.classList.length === 3) {
        randomNum = Number(randomNum);
        randomNum = randomNum + 1;
        if (randomNum > 20) {
            randomNum = 1;
        };
    setBG();
} else if (unsplash.classList.length === 3) {
    randomUnsplash();
} else if (flickr.classList.length === 3) {
    randomFlickr();
}
};

export function getSlidePrev() {
    if (github.classList.length === 3) {
        randomNum = Number(randomNum);
        randomNum = randomNum - 1
        if (randomNum < 1) {
            randomNum = 20;
        };
    setBG();
    } else if (unsplash.classList.length === 3) {
        randomUnsplash();
    } else if (flickr.classList.length === 3) {
        randomFlickr();
    }
};

const userTags = document.querySelector('.background-tags')

async function randomUnsplash() {
    const body = document.querySelector('body');
    if (!userTags.value) {
    const timeOfDay = getTimeOfDay();
    const url = `https://api.unsplash.com/photos/random?query=${timeOfDay}&client_id=KEU8yVsXjFEr9LB4UO43GlWqgow-F1OVDLna3KX0s-k`;
    const res = await fetch(url);
    const data = await res.json();
    const img = new Image();
    img.src = data.urls.regular;
    img.onload = () => {      
        body.style.backgroundImage = `url(${data.urls.regular})`;
      }; 
    } else if (userTags.value) {
        const url = `https://api.unsplash.com/photos/random?query=${userTags.value}&client_id=KEU8yVsXjFEr9LB4UO43GlWqgow-F1OVDLna3KX0s-k`;
        const res = await fetch(url);
        const data = await res.json();
        const img = new Image();
        img.src = data.urls.regular;
        img.onload = () => {      
            body.style.backgroundImage = `url(${data.urls.regular})`;
        }; 
    };
};

async function randomFlickr() {
    const body = document.querySelector('body');
    let random = getRandomNum(1, 30);
    if (!userTags.value) {
    const timeOfDay = getTimeOfDay();
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=bbbf65a80f41ac0f1b5dd8194076e3a2&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    const img = new Image();
    img.src = data.photos.photo[random].url_l;
    img.onload = () => {      
        body.style.backgroundImage = `url(${data.photos.photo[random].url_l})`;
      }; 
    } else if (userTags.value) {
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=bbbf65a80f41ac0f1b5dd8194076e3a2&tags=${userTags.value}&extras=url_l&format=json&nojsoncallback=1`;
        const res = await fetch(url);
        const data = await res.json();
        const img = new Image();
        img.src = data.photos.photo[random].url_l;
        img.onload = () => {      
            body.style.backgroundImage = `url(${data.photos.photo[random].url_l})`;
          }; 
    };
};

const github = document.querySelector('.button-git');
const unsplash = document.querySelector('.button-unsplash');
const flickr = document.querySelector('.button-flickr');

export function choseUnsplash() {
    github.classList.remove('active');
    unsplash.classList.add('active');
    flickr.classList.remove('active');
    userTags.removeAttribute('disabled');
    getSlideNext();
};

export function choseGithub() {
    github.classList.add('active');
    unsplash.classList.remove('active');
    flickr.classList.remove('active');
    userTags.setAttribute('disabled', '');
    getSlideNext();
};

export function choseFlickr() {
    github.classList.remove('active')
    unsplash.classList.remove('active')
    flickr.classList.add('active')
    userTags.removeAttribute('disabled');
    getSlideNext();
};
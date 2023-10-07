import { showTime } from './time.js';
import { clearTime } from './time.js';
import { changeNamePlaceholder } from './greeting.js';
import { settingsLanguage } from './settings.js';
import { choseGithub } from './background.js';

export function setImageSource(source) {
    if (source === 'unsplash') {
        choseUnsplash()
    } else if (source === 'flickr') {
        choseFlickr();
    } else {
        choseGithub();
    };
};

let chosenLanguage = '';

import { setLocalStorage } from './localStorage.js';
import { getLocalStorage } from './localStorage.js';
window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)

import { changeCityWeather } from './weather.js';
const city = document.querySelector('.city');
city.addEventListener('change', setDefaultLanguage);

import { setDefaultCity } from './weather.js';

window.addEventListener('load', setDefaultLanguage);

const english = document.querySelector('.english');
english.addEventListener('click', setEnglish);
const russian = document.querySelector('.russian');
russian.addEventListener('click', setRussian);
const belarusian = document.querySelector('.belaurusian');
belarusian.addEventListener('click', setBelarusian);
function setEnglish() {
    changeCityWeather('en');
    clearTime();
    showTime('en')
    setDefaultCity('en');
    setQuotes('en');
    changeNamePlaceholder('en');
    settingsLanguage('en')
    english.classList.add('active')
    russian.classList.remove('active')
    belarusian.classList.remove('active')
    chosenLanguage = 'en'
};

function setRussian() {
    changeCityWeather('ru');
    clearTime();
    showTime('ru')
    setDefaultCity('ru');
    setQuotes('ru');
    changeNamePlaceholder('ru');
    settingsLanguage('ru')
    english.classList.remove('active')
    russian.classList.add('active')
    belarusian.classList.remove('active')
    chosenLanguage = 'ru'
};

function setBelarusian() {
    changeCityWeather('be');
    clearTime();
    showTime('be')
    setDefaultCity('be');
    setQuotes('be');
    changeNamePlaceholder('be');
    settingsLanguage('be')
    english.classList.remove('active')
    russian.classList.remove('active')
    belarusian.classList.add('active')
    chosenLanguage = 'be'
};

export function setDefaultLanguage(language) {
    if (language === 'en' || chosenLanguage === 'en') {
        setEnglish();
    } else if (language === 'ru' || chosenLanguage === 'ru') {
        setRussian();
    } else if (language === 'be' || chosenLanguage === 'be') {
        setBelarusian();
    } else {
        setEnglish();
    };
};

import { getSlideNext } from './background.js';
const slideNext = document.querySelector('.slide-next');
slideNext.addEventListener('click', getSlideNext);

import { getSlidePrev } from './background.js';
const slidePrev = document.querySelector('.slide-prev');
slidePrev.addEventListener('click', getSlidePrev);

import { setQuotes } from './quote.js';

const newQuote = document.querySelector('.change-quote');
newQuote.addEventListener('click', setDefaultLanguage);

import { rotateButton } from './quote.js';
newQuote.addEventListener('click', rotateButton);

import { playAudio } from './player.js';
const playButton = document.querySelector('.play');
playButton.addEventListener('click', playAudio);

import { playPrev } from './player.js';
const playPrevButton = document.querySelector('.play-prev');
playPrevButton.addEventListener('click', playPrev);

import { playNext } from './player.js';
const playNextButton = document.querySelector('.play-next');
playNextButton.addEventListener('click', playNext);

import { createPlaylist } from './player.js';
createPlaylist();

import { changeProgressBar } from './player.js';
const progress = document.querySelector('.timeline')
progress.addEventListener('click', changeProgressBar)

import { changeVolume } from './player.js';
setInterval(changeVolume, 100);

import { turnVolume } from './player.js';
const volumeButton = document.querySelector('.volume-icon');
volumeButton.addEventListener('click', turnVolume);

import { changeTrack } from './player.js';
const playItem = document.querySelectorAll('.play-item');
playItem.forEach(item => item.addEventListener('click', changeTrack));

import { checkCheckboxes } from './settings.js';
const checkBoxes = document.querySelector('.hideorview');
checkBoxes.addEventListener('click', checkCheckboxes);

import { toggleSetting } from './settings.js';
const settings = document.querySelector('.settings-button')
settings.addEventListener('click', toggleSetting);

const github = document.querySelector('.button-git')
github.addEventListener('click', choseGithub);
import { choseUnsplash } from './background.js';
const unsplash = document.querySelector('.button-unsplash');
unsplash.addEventListener('click', choseUnsplash);
import { choseFlickr } from './background.js';
const flickr = document.querySelector('.button-flickr');
flickr.addEventListener('click', choseFlickr);
const tags = document.querySelector('.background-tags');
tags.addEventListener('change', getSlideNext);
import { blocks } from "./settings.js";
import { setDefaultLanguage } from "./index.js";
import { setImageSource } from "./index.js";

export function setLocalStorage() {
    const name = document.querySelector('.name');
    localStorage.setItem('name', name.value);
    const city = document.querySelector('.city');
    localStorage.setItem('city', city.value);
    const english = document.querySelector('.english');
    const russian = document.querySelector('.russian');
    const belarusian = document.querySelector('.belaurusian');
    if (english.classList.value === 'english active') {
      localStorage.setItem('language', 'en');
    } else if (russian.classList.value === 'russian active') {
      localStorage.setItem('language', 'ru');
    } else if (belarusian.classList.value === 'belaurusian active') {
      localStorage.setItem('language', 'be');
    }
    const github = document.querySelector('.button-git');
    const unsplash = document.querySelector('.button-unsplash')
    const flickr = document.querySelector('.button-flickr')
    if (unsplash.classList.length === 3) {
      localStorage.setItem('image', 'unsplash')
    } else if (flickr.classList.length === 3) {
      localStorage.setItem('image', 'flickr')
    } else if (github.classList.length === 3) {
      localStorage.setItem('image', 'github')
    }
    const tags = document.querySelector('.background-tags')
    if (tags.value) {
      localStorage.setItem('tags', tags.value)
    } else if (!tags.value) {
      localStorage.setItem('tags', tags.value)
    }
    const checkTime = document.querySelector('.checkTime');
    if (!checkTime.checked) {
      localStorage.setItem('time', 'uncheked');
    } else localStorage.removeItem('time');
    const checkDate = document.querySelector('.checkDate');
    if (!checkDate.checked) {
      localStorage.setItem('date', 'uncheked');
    } else localStorage.removeItem('date');
    const checkGreeting = document.querySelector('.checkGreeting');
    if (!checkGreeting.checked) {
      localStorage.setItem('greeting', 'uncheked');
    } else localStorage.removeItem('greeting');
    const checkQuote = document.querySelector('.checkQuote');
    if (!checkQuote.checked) {
      localStorage.setItem('quote', 'uncheked');
    } else localStorage.removeItem('quote');
    const checkWeather = document.querySelector('.checkWeather');
    if (!checkWeather.checked) {
      localStorage.setItem('weather', 'uncheked');
    } else localStorage.removeItem('weather');
    const checkAudio = document.querySelector('.checkAudio');
    if (!checkAudio.checked) {
      localStorage.setItem('audio', 'uncheked');
    } else localStorage.removeItem('audio');
};

export function getLocalStorage() {
    const name = document.querySelector('.name');
    const city = document.querySelector('.city');
    const hideOnLoad = ['hiddenonload', 'disabled'];
    const checkTime = document.querySelector('.checkTime');
    const checkDate = document.querySelector('.checkDate');
    const checkGreeting = document.querySelector('.checkGreeting');
    const checkQuote = document.querySelector('.checkQuote');
    const checkWeather = document.querySelector('.checkWeather');
    const checkAudio = document.querySelector('.checkAudio');
    const time = document.querySelector('.time');
    const date = document.querySelector('.date');
    const greeting = document.querySelector('.greetings-container');
    const quote = document.querySelector('.quote-container');
    const weather = document.querySelector('.weather');
    const audio = document.querySelector('.player-container');
    const tags = document.querySelector('.background-tags')
    let defaultLanguage = localStorage.getItem('language')
    setDefaultLanguage(defaultLanguage);
    if (localStorage.getItem('tags')) {
      tags.value = localStorage.getItem('tags');
    };
    if (localStorage.getItem('image')) {
      let imageSource = localStorage.getItem('image');
      setImageSource(imageSource);
    } else setImageSource('github');
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    };
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
    };
    if(localStorage.getItem('time')) {
      checkTime.checked = false;
      blocks.delete('time')
      time.classList.add(...hideOnLoad);
      setTimeout(removeHide, 2000, time);
    };
    if(localStorage.getItem('date')) {
      checkDate.checked = false;
      blocks.delete('date')
      date.classList.add(...hideOnLoad);
      setTimeout(removeHide, 2000, date);
    };
    if(localStorage.getItem('greeting')) {
      checkGreeting.checked = false;
      blocks.delete('greeting')
      greeting.classList.add(...hideOnLoad);
      setTimeout(removeHide, 2000, greeting);
    };
    if(localStorage.getItem('quote')) {
      checkQuote.checked = false;
      blocks.delete('quote')
      quote.classList.add(...hideOnLoad);
      setTimeout(removeHide, 2000, quote);
    };
    if(localStorage.getItem('weather')) {
      checkWeather.checked = false;
      blocks.delete('weather')
      weather.classList.add(...hideOnLoad);
      setTimeout(removeHide, 2000, weather);
    };
    if(localStorage.getItem('audio')) {
      checkAudio.checked = false;
      blocks.delete('audioplayer')
      audio.classList.add(...hideOnLoad);
      setTimeout(removeHide, 2000, audio);
    };
};

function removeHide(item) {
  item.classList.remove('hiddenonload')
} 


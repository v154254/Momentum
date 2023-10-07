import { showDate } from './date.js';
import { showGreeting } from './greeting.js';

let timer
export function showTime(language) {
    const time = document.querySelector('.time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    let lang = language
    showDate(lang);
    showGreeting(lang);
    timer = setTimeout(showTime, 1000, lang);
};

export function clearTime() {
    clearTimeout(timer);
};

    
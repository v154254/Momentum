export function showGreeting(language) {
    const greeting = document.querySelector('.greeting');
    const timeOfDay = getTimeOfDay();
    let greetLang = greetingTranslation[language];
    if (timeOfDay === 'night') {
        greeting.textContent = greetLang[3];
    } else if (timeOfDay === 'morning') {
        greeting.textContent = greetLang[0];
    } else if (timeOfDay === 'afternoon') {
        greeting.textContent = greetLang[1];
    } else if (timeOfDay === 'evening') {
        greeting.textContent = greetLang[2];
    }
};

export function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 6) {
        return 'night';
    } else if (hours < 12) {
        return 'morning';
    } else if (hours < 18) {
        return 'afternoon';
    } else if (hours < 24) {
        return 'evening';
    };
};

const greetingTranslation = {
    en: ['Good morning,', 'Good afternoon,', 'Good evening,', 'Good night,'],
    ru: ['Доброе утро,', 'Добрый день,', 'Добрый вечер,', 'Спокойной ночи,'],
    be: ['Добрай раніцы,', 'Добры дзень,', 'Добры вечар,', 'Дабранач,']
};

export function changeNamePlaceholder(language) {
    const namePlaceholder = document.querySelector('.name')
    if (language === 'en') {
        namePlaceholder.placeholder = '[Enter name]'
    }
    else if (language === 'ru') {
        namePlaceholder.placeholder = '[Укажите имя]'
    } else {
        namePlaceholder.placeholder = '[Пазначце імя]'
    }
}
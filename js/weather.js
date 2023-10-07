export async function getWeather(url, language) {
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const errorMessage = document.querySelector('.weather-error');
    const weatherDescription = document.querySelector('.weather-description');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const urlWeather = url;
    const res = await fetch(urlWeather);
    if (res.ok) {
    const data = await res.json(); 
    weatherIcon.className = 'weather-icon owf';
    errorMessage.textContent = ``;
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    if (language === 'en') {
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    } else if (language === 'ru') {
        wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
        humidity.textContent = `Влажность: ${data.main.humidity}%`; 
    } else {
        wind.textContent = `Хуткасць ветру: ${Math.round(data.wind.speed)} м/с`;
        humidity.textContent = `Вільготнасць: ${data.main.humidity}%`; 
    }
    } else {
        if (language === 'en') {
    errorMessage.textContent = 'No information for this city';
        } else if (language === 'ru') {
            errorMessage.textContent = 'Нет информации для данного города'; 
        } else {
            errorMessage.textContent = 'Не знайшлі такі горад!';
        }
    weatherIcon.className = 'weather-icon owf';
    temperature.textContent = ``;
    weatherDescription.textContent = ``;
    wind.textContent = ``;
    humidity.textContent = ``;
    };
};

export function changeCityWeather(language) {
    const city = document.querySelector('.city');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=a4a56306ee042688d8fdc13efbb31519&units=metric`;
    const languageToWeather = language
    getWeather(url, languageToWeather);
};

export function setDefaultCity(language) {
    const city = document.querySelector('.city');
    if (!city.value) {
        if (language === 'en') {
            city.value = 'Minsk';
        } else city.value = 'Минск';
    }
    else if (city.value === 'Minsk' || city.value === 'Минск') {
        if (language === 'en') {
            city.value = 'Minsk';
        } else city.value = 'Минск';
    };
};
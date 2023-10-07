const state = {
    photoSource: 'github',
    blocks: ['time', 'date','greeting', 'quote', 'weather', 'audioplayer']
  }

export let blocks = new Set(state.blocks);

function hideOrView() {
    const time = document.querySelector('.time')
    if (blocks.has('time')) {
        time.classList.remove('disabled')
        } else { time.classList.add('disabled')
    }
    const date = document.querySelector('.date')
    if (blocks.has('date')) {
        date.classList.remove('disabled')
        } else { date.classList.add('disabled')
    }
    const greeting = document.querySelector('.greetings-container')
    if (blocks.has('greeting')) {
        greeting.classList.remove('disabled')
        } else { greeting.classList.add('disabled')
    }
    const quote = document.querySelector('.quote-container')
    if (blocks.has('quote')) {
        quote.classList.remove('disabled')
        } else { quote.classList.add('disabled')
    }
    const weather = document.querySelector('.weather')
    if (blocks.has('weather')) {
        weather.classList.remove('disabled')
        } else { weather.classList.add('disabled')
    }
    const audioplayer = document.querySelector('.player-container')
    if (blocks.has('audioplayer')) {
        audioplayer.classList.remove('disabled')
        } else { audioplayer.classList.add('disabled')
    }
};

export function checkCheckboxes() {
    let target = event.target;
    if (target.tagName != 'INPUT') return;
    checkboxEnable(target); 
  };

function checkboxEnable(input) {
    if (input.checked && input.name === "time") { 
        blocks.add('time')
      } else if (!input.checked && input.name === "time") {
        blocks.delete('time')
    }
    if (input.checked && input.name === "date") { 
        blocks.add('date')
      } else if (!input.checked && input.name === "date") {
        blocks.delete('date')
    }
    if (input.checked && input.name === "greeting") { 
        blocks.add('greeting')
      } else if (!input.checked && input.name === "greeting") {
        blocks.delete('greeting')
    }
    if (input.checked && input.name === "quote") { 
        blocks.add('quote')
      } else if (!input.checked && input.name === "quote") {
        blocks.delete('quote')
    }
    if (input.checked && input.name === "weather") { 
        blocks.add('weather')
      } else if (!input.checked && input.name === "weather") {
        blocks.delete('weather')
    }
    if (input.checked && input.name === "weather") { 
        blocks.add('weather')
      } else if (!input.checked && input.name === "weather") {
        blocks.delete('weather')
    }
    if (input.checked && input.name === "audioplayer") { 
        blocks.add('audioplayer')
      } else if (!input.checked && input.name === "audioplayer") {
        blocks.delete('audioplayer')
    }
    hideOrView();
};

export function toggleSetting() {
  const settings = document.querySelector('.settings')
  settings.classList.toggle('enabled')
};

export function settingsLanguage(language) {
  const checkTime = document.querySelector('.hideTime');
  const checkDate = document.querySelector('.hideDate');
  const checkGreeting = document.querySelector('.hideGreet');
  const checkQuote = document.querySelector('.hideQuote');
  const checkWeather = document.querySelector('.hideWeather');
  const checkAudio = document.querySelector('.hidePlayer');
  const settings = document.querySelector('.settings-text');
  const chooseTags = document.querySelector('.background-tags');
  const chooseBG = document.querySelector('.choose-background')
  if (language === 'en') {
    checkTime.textContent = ' Enable time'
    checkDate.textContent = ' Enable date'
    checkGreeting.textContent = ' Enable greeting'
    checkQuote.textContent = ' Enable quote of the day'
    checkWeather.textContent = ' Enable weather forecast'
    checkAudio.textContent = ' Enable audioplayer'
    settings.textContent = 'Settings';
    chooseTags.placeholder = 'Choose tags for images';
    chooseBG.textContent = 'Choose background source';
  } else if (language === 'ru') {
    checkTime.textContent = ' Включить время'
    checkDate.textContent = ' Включить дату'
    checkGreeting.textContent = ' Включить приветствие'
    checkQuote.textContent = ' Включить цитату дня'
    checkWeather.textContent = ' Включить прогноз погоды'
    checkAudio.textContent = ' Включить аудиоплеер'
    settings.textContent = 'Настройки';
    chooseTags.placeholder = 'Укажите тэги для изображений';
    chooseBG.textContent = 'Выберите источник фонового изображения';
  } else if (language === 'be') {
    checkTime.textContent = ' Уключыць час'
    checkDate.textContent = ' Уключыць дату'
    checkGreeting.textContent = ' Уключыць прывітанне'
    checkQuote.textContent = ' Уключыць цытату дня'
    checkWeather.textContent = ` Уключыць прагноз надвор'я`
    checkAudio.textContent = ' Уключыць аўдыяплэер'
    settings.textContent = 'Налады';
    chooseTags.placeholder = 'Вызначце тэгі для малюнкаў';
    chooseBG.textContent = 'Абярыце крыніцу фонавага малюнка';
  };
};
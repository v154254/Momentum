const belDays = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота',];
const belMonths = ['студзеня', 'лютага', 'сакавіка', 'красавіка', 'траўня', 'чэрвень', 'ліпеня', 'жніўня', 'верасня', 'кастрычніка', 'лістапада', 'снежня'];

export function showDate(language) {
    const dateToShow = document.querySelector('.date');
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    if (language === 'en') {
        dateToShow.textContent = date.toLocaleDateString('en-US', options);
    } else if (language === 'ru') {
        let rus = date.toLocaleDateString('ru-RU', options);
        rus = rus[0].toUpperCase() + rus.slice(1)
        dateToShow.textContent = rus;
    } else {
        let fullDate = '';
        let day = date.getDay()
        for (let i = 0; i < 7; i++) {
            if (i === day) {
                fullDate = `${belDays[i]}`;
            };
        };
        fullDate = `${fullDate}, ${date.getDate()}`;
        let month = date.getMonth();
        for (let j = 0; j < 12; j++) {
            if (j === month) {
                fullDate = `${fullDate} ${belMonths[j]}`;
            };
        };
        dateToShow.textContent = fullDate;
    };
};


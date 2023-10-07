function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

export async function setQuotes(language) {
    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');
    let randomQuote = 0;
    if (language === 'en') {
        randomQuote = getRandomNum(0, 24);
        const res = await fetch('assets/json/english.json');
        const data = await res.json(); 
        quote.textContent = data[randomQuote].text;
        author.textContent = data[randomQuote].author;
    } else if (language === 'ru') {
        randomQuote = getRandomNum(0, 15);
        const res = await fetch('assets/json/russian.json');
        const data = await res.json(); 
        quote.textContent = data[randomQuote].text;
        author.textContent = data[randomQuote].author;
    } else {
        randomQuote = getRandomNum(0, 260);
        const res = await fetch('assets/json/belarusian.json');
        const data = await res.json(); 
        quote.textContent = data[randomQuote].text;
        author.textContent = data[randomQuote].author;
    }
};

export function rotateButton() {
    const quoteButton = document.querySelector('.change-quote');
    quoteButton.classList.add('animate');
    setTimeout(stopRotateButton, 1000)
}

function stopRotateButton() {
    const quoteButton = document.querySelector('.change-quote');
    quoteButton.classList.remove('animate');
}
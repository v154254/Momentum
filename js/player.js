let isPlay = false
const audio = new Audio();
import playList from './playList.js';
let playNum = 0;
const progressBar = document.querySelector('.timeline');
progressBar.value = 0;
const ul = document.querySelector('.play-list')

export function createPlaylist() {
    playList.forEach(el => {
    let li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = el.title;
    const playListContainer = document.querySelector('.play-list');
    playListContainer.append(li)
    });
};

export function changeTrack(event){
    if (event.target.classList.contains('playing')) {
        event.target.classList.remove('playing');
        playAudio();
    } else { for (let item of ul.children) {
        item.classList.remove('playing')
    } if (event.target.classList.contains('currently-playing')) {
        playAudio();
    } else {
        for (let item of ul.children) {
            item.classList.remove('currently-playing')
        }
    progressBar.value = 0;
    isPlay = false;
    for (let song in playList) {
        if (event.target.innerText === playList[song].title) {
            event.target.classList.add('playing');
            event.target.classList.add('currently-playing');
            playNum = song;
            playAudio();
        }
    }
    }
}
return playNum;
};

export function playAudio() {
    audio.src = playList[playNum].src;
    const playItem = document.querySelectorAll('.play-item');
    const currentlyPlaying = document.querySelector('.currently-playing')
    if (!isPlay) {
        changeProgressBar();
        audio.play();
        isPlay = true;
        for (let item of playItem) {
                item.classList.remove('playing')
          };
        for (let item of playItem) {
            if (item.innerText === playList[playNum].title) {
                item.classList.add('playing');
                currentlyPlaying.innerText = playList[playNum].title;
            };
          };
    } else {
        audio.pause();
        changeProgressBar();
        isPlay = false;
        for (let item of playItem) {
            item.classList.remove('playing')
      };
    }
togglePlayButton()
setInterval(updateProgressValue, 1000);
audio.addEventListener('ended', playNext);
};

function togglePlayButton() {
    const button = document.querySelector('.play');
    if (isPlay) {
        button.classList.add('pause')
    } else button.classList.remove('pause');
};

export function playNext() {
    for (let item of ul.children) {
        item.classList.remove('currently-playing')
    }
    playNum = Number(playNum) + 1;
    progressBar.value = 0;
    changeProgressBar();
    if (playNum > 3) {
        playNum = 0;
    };
    if (isPlay) {
        isPlay = false;
    }
    audio.src = playList[playNum].src;
    playAudio();
};

export function playPrev() {
    for (let item of ul.children) {
        item.classList.remove('currently-playing')
    }
    playNum = playNum - 1;
    progressBar.value = 0;
    changeProgressBar();
    if (playNum < 0) {
        playNum = 3;
    };
    if (isPlay) {
        isPlay = false;
    }
    audio.src = playList[playNum].src;
    playAudio();
};

function updateProgressValue() {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;
    document.querySelector('.current').innerHTML = (formatTime(Math.floor(audio.currentTime)));
    if (document.querySelector('.length').innerHTML === "NaN:NaN") {
        document.querySelector('.length').innerHTML = "0:00";
    } else {
        document.querySelector('.length').innerHTML = (formatTime(Math.floor(audio.duration)));
    };
};

function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

export function changeProgressBar() {
    audio.currentTime = progressBar.value;
};

const volumeIcon = document.querySelector('.volume-icon');

const volume = document.querySelector('.volume-slider');
export function changeVolume() {
  volume.max = 1;
  volume.min = 0;
  volume.step = 0.05;
  audio.volume = volume.value;
  if (volume.value <= 0.01) {
    volumeIcon.className = 'volume-icon icono-volumeMute';  
  } else if (volume.value >= 0.75) {
    volumeIcon.className = 'volume-icon icono-volumeHigh';
  } else if (volume.value <= 0.25) {
    volumeIcon.className = 'volume-icon icono-volumeLow';
  } else {
    volumeIcon.className = 'volume-icon icono-volumeMedium';
  };
};

export function turnVolume() {
    if (!audio.volume) {
        volume.value = 0.5;
        audio.volume = volume.value;
        volumeIcon.className = 'volume-icon icono-volumeMedium';
    } else {
        volume.value = 0;
        audio.volume = volume.value;
        volumeIcon.className = 'volume-icon icono-volumeMute';
    }
};

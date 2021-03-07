import storageService from './storage-service.js'

export function showBanner(banner) {
    banner.classList.add('banner-show');
        setTimeout(()=>{banner.classList.remove('banner-show')}, 3000, banner);
}

export function toggleDisabled() {
    const arr = Array.from(arguments);
    arr.forEach((element) => {
        if (element) {
            element.toggleAttribute('disabled');
        }
    })
}

export function changeColorMode() {
    const body = document.querySelector('body');

    body.classList.toggle('night-mode');
}

export function renderScore() {
    
    const game = JSON.parse(storageService.get('game'));
    const scoreSpan = document.querySelector('.score');

    if (scoreSpan) {
        scoreSpan.innerHTML = `Score: ${game.score}`
    }
    
}


export function toogleGameHandlers() {
    const pauseBtn = document.getElementById('pause-game-btn');
    const startGameBtn = document.getElementById('start-game-btn');
    const restartGameBtn = document.getElementById('restart-game-btn');
    const recordsBtn = document.getElementById('records-btn');
    const settingsBtn = document.getElementById('settings-btn');
    
    toggleDisabled(pauseBtn, startGameBtn, restartGameBtn, recordsBtn, settingsBtn);
}


export function setCheckedInputs(arr, inputValue) {
    arr.forEach(item => {
        if (+item.value === Math.abs(inputValue)) {
            item.setAttribute('checked', true);
        }
    })
}

export  function randomInteger(min, max) {
  
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
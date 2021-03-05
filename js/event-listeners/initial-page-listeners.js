import runGame from '../run-game.js';
import sounds from '../audio/audio-sounds.js';
import { toggleDisabled, changeColorMode } from '../utils.js';

export function setInitialPageEventListeners() {

    const rulesBtn = document.getElementById('rules-btn');
    const rulesCloseBtn = document.getElementById('close-rules-btn');
    const rules = document.getElementById('rules');
    const runGameFormInput = document.querySelector('#run-game-form input');
    const runGameFormSubmit = document.querySelector('#run-game-form button');

    //show rules btn
    rulesBtn.addEventListener('click', () => {
        rules.classList.add('show');
        toggleDisabled(runGameFormInput, runGameFormSubmit);
        sounds.showRulesSound();
    })


    //close rules btn
    rulesCloseBtn.addEventListener('click', () => {
        rules.classList.remove('show');
        toggleDisabled(runGameFormInput, runGameFormSubmit);
        sounds.showRulesSound();
    })


    //color mode change listener
    const colorModeBtn = document.getElementById('color-mode-btn');
    colorModeBtn.addEventListener('click', () => {
        changeColorMode(),
        sounds.switchColorThemeSound();
    })


    //run game after submit form
    const userNameForm = document.getElementById('run-game-form');
    userNameForm.addEventListener('submit', runGame);
        
}
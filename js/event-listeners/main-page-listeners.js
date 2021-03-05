import { gameOver } from '../gameOver.js';

import goToInitial from '../go-to-initial.js';
import goToRecords from '../go-to-records.js';
import goToSettings from '../go-to-settings.js';

import startGame from '../canvas/operators/start-game.js';
import toogleBallSpeed from '../canvas/operators/toogle-ball-speed.js';
import {startMovingPaddle, stopMovingPaddle} from '../canvas/operators/move-paddle.js';

export function setMainPageListeners(intId) {

    //padding handlers events
    document.addEventListener('keydown', startMovingPaddle);
    document.addEventListener('keyup', stopMovingPaddle);

    //start on press enter
    document.addEventListener('keydown', startGame )
    
    //pause on space
    document.addEventListener('keypress', toogleBallSpeed )

    //restar on esc
    document.addEventListener('keydown', gameOver)

    //pause btn
    const pauseBtn = document.getElementById('pause-game-btn');
    pauseBtn.addEventListener('click', toogleBallSpeed);
    
    //start btn
    const startGameBtn = document.getElementById('start-game-btn');
    startGameBtn.addEventListener('click', startGame);

    //restart btn
    const restartGameBtn = document.getElementById('restart-game-btn');
    restartGameBtn.addEventListener('click', gameOver);

    //settings btn
    const settingsBtn = document.getElementById('settings-btn');
    settingsBtn.addEventListener(
        'click',
        function () { goToSettings(intId) },
        false
    );

    //esc btn
    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener(
        'click',
        function () { goToInitial(intId) } ,
        false
    );

    //records btn
    const recordsBtn = document.getElementById('records-btn');
    recordsBtn.addEventListener(
        'click',
        function () { goToRecords(intId) } ,
        false
    );

    
}
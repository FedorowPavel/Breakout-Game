import game from '../game.js';
import sounds from '../audio/audio-sounds.js';
import updateCanvas from './update-canvas.js';
import { CANVAS_INTERVAL } from '../constants.js';
import renderInitialPage from './render-initial.js';
import { showBanner, toggleDisabled } from '../utils.js';
import mainTemplate from '../templates/pages/main-page.js';
import { setMainPageListeners } from '../event-listeners/main-page-listeners.js';



function renderMainPage() {

    if (!game.currentPlayer) {
        renderInitialPage();
        return
    }

    const container = document.getElementById('container');
    container.innerHTML = mainTemplate;

    const greetingBanner = document.querySelector('.banner.banner-greeting');
    greetingBanner.innerHTML = `Hello, ${game.currentPlayer}`

    const nameSpan = document.querySelector('.payer_name');
    nameSpan.innerHTML = `Name: ${game.currentPlayer}`

    // show banner after 0.5s
    setTimeout(() => { showBanner(greetingBanner) }, 500);
    

    //update canvas and animation
    let intId = setInterval(() => { updateCanvas() }, CANVAS_INTERVAL);
    
    setMainPageListeners(intId)

    const pauseBtn = document.getElementById('pause-game-btn');
    const startGameBtn = document.getElementById('start-game-btn');
    const restartGameBtn = document.getElementById('restart-game-btn');

    if (!game.started) {
        toggleDisabled(pauseBtn, startGameBtn, restartGameBtn);
    }

    sounds.renderPageSound();
}


export default renderMainPage;
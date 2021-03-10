import game from '../game.js';
import sounds from '../audio/audio-sounds.js';
import bricks from '../canvas/objects/brick.js';
import storageService from '../storage-service.js';
import startTemplate from '../templates/pages/initial-page.js';
import { setInitialPageEventListeners } from '../event-listeners/initial-page-listeners.js';


function renderInitialPage() {
    const container = document.getElementById('container');
    container.innerHTML = startTemplate;

    //prevent error when we render initial page first time
    //browser defence from sounds when page loaded
    if (game.currentPlayer) {
        sounds.renderPageSound();
    }

    game.resetGame();

    storageService.set('game', JSON.stringify(game))

    bricks.clearField();

    setInitialPageEventListeners()
}

export default renderInitialPage;
import game from './game.js';
import { showBanner } from './utils.js';
import { navigateToUrl } from './routing.js';
import sounds from './audio/audio-sounds.js';
import recordsList from './records/records.js'
import storageService from './storage-service.js';


function runGame(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userName = formData.get('name').trim();

    //show error if username is empty and run pressed
    if (!userName) {
        const errorBanner = document.querySelector('.banner');
        
        sounds.errorSound();
        showBanner(errorBanner);

        return
    }

    game.setCurrentUser(userName);

    storageService.set('game', JSON.stringify(game))
    storageService.set('records', JSON.stringify(recordsList.records))

    navigateToUrl(`/main`);

    event.target.reset();
}

export default runGame;
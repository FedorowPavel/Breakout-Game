import { renderPage } from './routing.js';
import { setMusicPlayerEventListeners } from './event-listeners/music-player-listeners.js';


//load init page
renderPage();


//set listener for url chages
window.addEventListener('popstate', () => {
    renderPage();
})

//set listeners for music layer
setMusicPlayerEventListeners();














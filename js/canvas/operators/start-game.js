import game from "../../game.js";
import { renderScore, toogleGameHandlers } from "../../utils.js";
import storageService from "../../storage-service.js";


function startGame(event) {
    const factContainer = document.querySelector('.fact-container');
    const canvas = document.getElementById('canvas');

    //if we not on main page keydown dont work
    if (!canvas) {
        return
    }

    if (factContainer) {
        factContainer.classList.remove('show');
    }

    if (!game.paused && !game.started) {

        if (event.key === "Enter" || event.type === "click") {
            toogleGameHandlers();
            game.startGame();
            storageService.set('game', JSON.stringify(game))
            renderScore();
        }
        
    }
}

export default startGame;
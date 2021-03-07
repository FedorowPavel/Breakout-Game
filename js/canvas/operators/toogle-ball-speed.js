import game from "../../game.js";
import ball from "../objects/ball.js";
import storageService from "../../storage-service.js";

function toogleBallSpeed(event) {

    if (!game.started) { return }
   
    if (event.key === " " || event.type === "click") {

        const pauseBtn = document.getElementById('pause-game-btn');

        if (ball.dX && ball.dY && game.started) {
            
            ball.stopBall();
            game.pauseGame();

            pauseBtn.innerHTML = 'Resume';

            storageService.set('game', JSON.stringify(game))
            event.target.blur();

            return
            
        } else {
            
            ball.resumeBallSpeed();
            game.resumeGame();

            pauseBtn.innerHTML = 'Pause'

            storageService.set('game', JSON.stringify(game))
            event.target.blur();
            
            return
        }
    }
}

export default toogleBallSpeed;
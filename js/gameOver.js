import game from "./game.js";

import ball from "./canvas/objects/ball.js";
import bricks from "./canvas/objects/brick.js";
import paddle from "./canvas/objects/paddle.js";

import sounds from "./audio/audio-sounds.js";
import renderFact from "./render/render-fact.js";
import storageService from "./storage-service.js";
import writeRecord from "./records/write-record.js";
import { renderScore, toogleGameHandlers } from "./utils.js";


//works when ball fall out of padding and restart pressed
export function gameOver(event) {
    
    if (!game.started) { return }

    if (
        !event ||
        event.key === "Escape" ||
        event.type === "click"
    )
    {
        const pauseBtn = document.getElementById('pause-game-btn');
        pauseBtn.innerHTML = 'Pause'

        sounds.gameOverSound();
        toogleGameHandlers();

        renderFact();
        
        writeRecord();
        
        game.endGame();
        game.resetScore();

        storageService.set('game', JSON.stringify(game))
        storageService.set('ball', JSON.stringify(ball))

        renderScore();

        bricks.showAllBricks();
        paddle.setInitialPaddlePos();
        ball.setInitialPos();
        ball.setSpeed(ball.dX || ball.tempDX)
    }
    
}




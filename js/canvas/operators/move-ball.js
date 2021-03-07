import game from "../../game.js";
import ball from "../objects/ball.js";
import bricks from "../objects/brick.js";
import paddle from "../objects/paddle.js";
import { renderScore } from '../../utils.js';
import { gameOver } from "../../gameOver.js";
import storageService from "../../storage-service.js";
import sounds from "../../audio/audio-sounds.js";
import { BRICK_COL_COUNT, BRICK_ROW_COUNT } from "../../constants.js";



export function moveBall() {

    if (game.started) {
        //every time when canvas reloaded
        ball.posX += ball.dX;
        ball.posY += ball.dY;
    }

    const canvas = document.querySelector('canvas');

    if (!canvas) {
        return
    }

    //lest and right walls collisions
    if (
        ball.posX + ball.radius > canvas.width ||
        ball.posX - ball.radius < 0
    ) {
        ball.dX *= -1; //change direction
    }

    //top and bottom collisions
    if (
        ball.posY + ball.radius > canvas.height ||
        ball.posY - ball.radius < 0
    ) {
        ball.dY *= -1;
    }

    //padding collisions 
    if (
        ball.posX - ball.radius > paddle.posX &&
        ball.posX + ball.radius < paddle.posX + paddle.width &&
        ball.posY + ball.radius > paddle.posY
    ) {
        ball.dY *= -1;
    }

    const arrayOfBricks = JSON.parse(storageService.get('arrayOfBricks'))

    //block's collisions
    if (arrayOfBricks) {
        arrayOfBricks.forEach(column => {
            column.forEach(item => {
                if (item.visible) {
                    if (
                        //left and right side of eacn block
                        ball.posX - ball.radius > item.x &&
                        ball.posX + ball.radius < item.x + item.width &&
                        //top and bottom of each block
                        ball.posY + ball.radius > item.y &&
                        ball.posY - ball.radius < item.y + item.height
                    ) {
                        ball.dY *= -1;

                        bricks.setHidden(item);
                        sounds.brickBreakSound()

                        const ballSpeed = Math.abs(ball.dX);
                        const paddleWidth = paddle.width

                        game.increaseScore(ballSpeed, paddleWidth);

                        storageService.set('game', JSON.stringify(game))
                        storageService.set('arrayOfBricks', JSON.stringify(arrayOfBricks))

                        renderScore();
                    }
                }
            })
        });
    }

    //if fall not on paddle 
    if (ball.posY + ball.radius >= canvas.height) {
        gameOver();
    }

    //redraw blocks when all are broken
    if (game.score % (BRICK_COL_COUNT * BRICK_ROW_COUNT) === 0) {
        bricks.showAllBricks();
    }
    
    storageService.set('ball', JSON.stringify(ball));
}




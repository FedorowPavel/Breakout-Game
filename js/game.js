import ball from "./canvas/objects/ball.js";
import paddle from "./canvas/objects/paddle.js";
import {
    FAST_BALL_dX,
    INITIAL_BALL_dX,
    INITIAL_PADDLE_WIDTH,
    MIDDLE_BALL_dX,
    MIDDLE_PADDLE_WIDTH,
    POINT_1X, POINT_2X,
    POINT_3X, POINT_4X,
    POINT_6X, POINT_9X,
    SMALL_PADDLE_WIDTH

} from "./constants.js";

import backToMain from "./go-to-main.js";
import storageService from "./storage-service.js";

class Game {
    constructor(playerName) {
        this.started = false;
        this.currentPlayer = playerName;
        this.score = 0;
        this.gameOver = false;
        this.paused = false;
    }

    pauseGame() {
        this.paused = true;
    }

    resetGame() {
        this.started = false;
        this.currentPlayer = null;
        this.score = 0;
        this.gameOver = false;
        this.paused = false;
    }

    resumeGame() {
        this.paused = false;
    }

    setCurrentUser(userName) {
        this.currentPlayer = userName;
    }

    deleteCurrentUser() {
        this.currentPlayer = null;
    }

    increaseScore(ballSpeed, paddleWidth) {

        if (ballSpeed === INITIAL_BALL_dX) {

            switch (paddleWidth) {
                case INITIAL_PADDLE_WIDTH: this.score += POINT_1X;
                    break;
                
                case MIDDLE_PADDLE_WIDTH: this.score += POINT_2X;;
                    break;
                
                case SMALL_PADDLE_WIDTH: this.score += POINT_3X;
                    break;
            }

        }

        if (ballSpeed === MIDDLE_BALL_dX) {

            switch (paddleWidth) {
                case INITIAL_PADDLE_WIDTH: this.score += POINT_2X;
                    break;
                
                case MIDDLE_PADDLE_WIDTH: this.score += POINT_4X;;
                    break;
                
                case SMALL_PADDLE_WIDTH: this.score += POINT_6X;
                    break;
            }

        }

        if (ballSpeed === FAST_BALL_dX) {

            switch (paddleWidth) {
                case INITIAL_PADDLE_WIDTH: this.score += POINT_3X;
                    break;
                
                case MIDDLE_PADDLE_WIDTH: this.score += POINT_6X;;
                    break;
                
                case SMALL_PADDLE_WIDTH: this.score += POINT_9X;
                    break;
            }

        }

    }

    resetScore() {
        this.score = 0;
    }

    startGame() {
        this.paused = false;
        this.started = true;
        this.gameOver = false;
    }

    endGame() {
        this.paused = false;
        this.started = false;
        this.gameOver = true;
    }
}

const temp = JSON.parse(storageService.get('game'))

let playerName;
temp ? playerName = temp.currentPlayer : playerName = null;


console.log(playerName);

const game = new Game(playerName ? playerName : null);

export default game;
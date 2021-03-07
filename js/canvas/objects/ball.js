import {

    INITIAL_CANVAS_COLOR,
    INITIAL_BALL_POS_X,
    INITIAL_BALL_POS_Y,
    INITIAL_BALL_dX,
    INITIAL_BALL_dY,
    INITIAL_BALL_RADIUS
    
} from '../../constants.js';

import { randomInteger } from '../../utils.js';
import storageService from '../../storage-service.js';


class Ball {
    constructor() {
        this.posX = INITIAL_BALL_POS_X;
        this.posY = INITIAL_BALL_POS_Y;
        this.radius = INITIAL_BALL_RADIUS;
        this.dX = INITIAL_BALL_dX;
        this.dY = INITIAL_BALL_dY;
    }

    drawBall() {
        const canvas = document.getElementById('canvas');
        if (!canvas) { return }

        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = INITIAL_CANVAS_COLOR;
        ctx.fill();
        ctx.closePath();

    }

    setInitialPos() {
        this.posX = INITIAL_BALL_POS_X + randomInteger(-50, 50);
        this.posY = INITIAL_BALL_POS_Y;
        storageService.set('ball', JSON.stringify(ball));
    }

    stopBall() {
        this.tempDX = this.dX;
        this.tempDY = this.dY;
        this.dX = 0;
        this.dY = 0;
        storageService.set('ball', JSON.stringify(ball));
    }

    resumeBallSpeed() {
        this.dX = this.tempDX;
        this.dY = this.tempDY;
        storageService.set('ball', JSON.stringify(ball));
    }

    setInitialBallSpeed() {
        this.dX = INITIAL_BALL_dX;
        this.dY = INITIAL_BALL_dY;
        storageService.set('ball', JSON.stringify(ball));
    }

    setSpeed(speed) {
        this.dX = Math.abs(+speed);
        this.dY = -Math.abs(+speed);
        storageService.set('ball', JSON.stringify(ball));
    }
}

const ball = new Ball();

storageService.set('ball', JSON.stringify(ball));

export default ball;



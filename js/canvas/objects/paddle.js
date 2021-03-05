import {

    INITIAL_CANVAS_COLOR,
    INITIAL_PADDLE_POS_X,
    INITIAL_PADDLE_POS_Y,
    INITIAL_PADDLE_WIDTH,
    INITIAL_PADDLE_HEIGHT,
    INITIAL_PADDLE_SPEED,
    INITIAL_PADDLE_dX,

} from '../../constants.js';

import storageService from '../../storage-service.js'


class Paddle {
    constructor() {
        this.posX = INITIAL_PADDLE_POS_X;
        this.posY = INITIAL_PADDLE_POS_Y;
        this.width = INITIAL_PADDLE_WIDTH;
        this.height = INITIAL_PADDLE_HEIGHT;
        this.speed = INITIAL_PADDLE_SPEED;
        this.dX = INITIAL_PADDLE_dX;
    }

    drawPaddle() {
        const canvas = document.getElementById('canvas');

        if (!canvas) {
            return
        }

        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.rect(this.posX, this.posY, this.width, this.height);
        ctx.fillStyle = INITIAL_CANVAS_COLOR;
        ctx.fill();
        ctx.closePath();
    }


    setInitialPaddlePos() {
        //settimout to find canvas after its rendering in dom
        setTimeout(() => {
            this.posX = canvas.width / 2 - this.width / 2;
        }, 0)
    }

    setWidth(size) {
        this.width = +size;
        storageService.set('paddle', JSON.stringify(paddle))
    }

    setInitialPaddleWidth() {
        this.width = INITIAL_PADDLE_WIDTH;
    }
}

const paddle = new Paddle();

storageService.set('paddle', JSON.stringify(paddle))

export default paddle;
import storageService from '../../storage-service.js';
import {

    BRICK_COL_COUNT,
    BRICK_ROW_COUNT,
    INITIAL_CANVAS_COLOR,
    INITIAL_BRICK_WIDTH,
    INITIAL_BRICK_HEIGHT,
    INITIAL_BRICK_PADDING,
    INITIAL_BRICK_OFFSET_X,
    INITIAL_BRICK_OFFSET_Y

} from '../../constants.js';


class Brick {
    constructor() {
        this.width = INITIAL_BRICK_WIDTH;
        this.height = INITIAL_BRICK_HEIGHT;
        this.padding = INITIAL_BRICK_PADDING;
        this.offsetX = INITIAL_BRICK_OFFSET_X;
        this.offsetY = INITIAL_BRICK_OFFSET_Y;
        this.visible = true;
    }

    setHidden(brick) {
        brick.visible = false;
    }

    clearField() {
        let bricks = JSON.parse(storageService.get('arrayOfBricks'));

        if (bricks) {
            storageService.set('arrayOfBricks', JSON.stringify(null))
        }
    }


    showAllBricks() {
        let arrOfBricks = JSON.parse(storageService.get('arrayOfBricks'));

        if (arrOfBricks) {

            arrOfBricks
                .forEach(column => {
                    column
                        .forEach(item => item.visible = true);
            });
        }

        storageService.set('arrayOfBricks', JSON.stringify(arrOfBricks))
    }

    
    reRender(arrOfBricks) {
        const canvas = document.getElementById('canvas');

        if (!canvas) {
            return
        }

        const ctx = canvas.getContext('2d');
        arrOfBricks.forEach(column => {
            column.forEach(brick => {
                ctx.beginPath();
                ctx.rect(brick.x, brick.y, brick.width, brick.height);
                ctx.fillStyle = brick.visible ? INITIAL_CANVAS_COLOR : 'transparent';
                ctx.fill();
                ctx.closePath();
            })
        });
        
        storageService.set('arrayOfBricks', JSON.stringify(arrOfBricks))
    }


    drawBricks() {
        let bricks = JSON.parse(storageService.get('arrayOfBricks'));

        if (!bricks) {
            bricks = [];

            for (let i = 0; i < BRICK_COL_COUNT; i++) {
                bricks[i] = [];
                for (let j = 0; j < BRICK_ROW_COUNT; j++) {
                    const x = i * (this.width + this.padding) + this.offsetX;
                    const y = j * (this.height + this.padding) + this.offsetY;

                    bricks[i][j] = {  ...this, x, y }
                }
            }

            this.reRender(bricks)
        }
        else {
            this.reRender(bricks)
        }
        
    }
}

const bricks = new Brick();

export default bricks;
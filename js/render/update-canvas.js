import drawFieldsObjects from '../canvas/canvas.js';
import { moveBall } from '../canvas/operators/move-ball.js';
import { movePaddle } from '../canvas/operators/move-paddle.js';


function updateCanvas() {
    moveBall();

    movePaddle();

    drawFieldsObjects(); 
}


export default updateCanvas;
import game from "./game.js";
import { INDEX_URL } from "./constants.js";
import ball from "./canvas/objects/ball.js";
import { navigateToUrl } from "./routing.js";
import paddle from "./canvas/objects/paddle.js";


function goToInitial(intId) {
    
    clearInterval(intId);
    navigateToUrl(INDEX_URL[0]);

    ball.setInitialBallSpeed();
    ball.setInitialPos();

    paddle.setInitialPaddleWidth();

    game.resetScore();

    return
}

export default goToInitial;
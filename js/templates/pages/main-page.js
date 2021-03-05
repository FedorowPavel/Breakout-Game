import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../constants.js";


const mainTemplate = `

    <div class="banner banner-greeting"></div>

    <div class="info">
        <span class="payer_name"> </span>
        <span class="score">Score: 0</span>
    </div>

    <canvas id="canvas" width="${CANVAS_WIDTH}px" height="${CANVAS_HEIGHT}px"></canvas>

    <div class="game-operators">
        <button id="pause-game-btn">Pause</button>
        <button id="restart-game-btn"><i class="fas fa-redo"></i></button>
        <button id="start-game-btn" disabled>Start</button>
    </div>

    <div class="asside-buttons">
        <button class="back-btn"><i class="fas fa-backward"></i></button>
        <button id="settings-btn" ><i class="fas fa-cog"></i></button>
        <button id="records-btn" ><i class="fas fa-trophy"></i></button>
        
    </div>

    <div class="fact-container">
        <small>Press any key to hide</small>
    </div>

`

export default mainTemplate;



const mainTemplate = 
`

<div class="banner banner-greeting"></div>
<span class="payer_name"> </span>
<span class="score">Score: </span>

<canvas id="canvas" width="600px" height="450px"></canvas>
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
<div class="records-wrapper">
    <h1>records</h1>
    <button id="close-btn">Close</button>
</div>
`

export default mainTemplate;



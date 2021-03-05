const startTemplate = `

    <div class="banner"><span>Enter username and press Run</span></div>
    <button id="rules-btn">Rules</button>
    <div id="rules" class="rules">
        <h3>How to play</h3>
        <p>Use your right and left keys to move the paddle to bounce the ball up and break the blocks</p>
        <p>If you miss the ball you loose.</p>
        <button id="close-rules-btn">Close</button>
    </div>
    <button id="color-mode-btn"><i class="fas fa-lightbulb"></i></button>

    <H1>Breakout!</H1>
    <form action="" id="run-game-form">
        <input type="text" name="name" maxlength="15" placeholder="Enter your name...">
        <button id="run-game-btn" type="submit">Run</button>
    </form>

`
export default startTemplate;
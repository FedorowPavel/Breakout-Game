const startTemplate = `

    <div class="banner"><span>Enter username and press Run</span></div>
    <button id="rules-btn">Rules</button>
    <div id="rules" class="rules">
        <h3>How to play</h3>

        <p>Use your right and left keys to move the paddle to bounce the ball up and break the blocks</p>
        <p>If you miss the ball you loose.</p>

        <h3>Handlers</h3>

        <div class="handler">
            <span class="handler-key enter">enter</span>
            <span>star game</span>
        </div>

        <div class="handler">
            <span class="handler-key"><i class="fas fa-arrow-left"></i></span>
            <span class="handler-key"><i class="fas fa-arrow-right"></i></span>
            <span>move paddle</span>
        </div>

        <div class="handler">
            <span class="handler-key space">space</span>
            <span>pause/resume</span>
        </div>

        <div class="handler">
            <span class="handler-key space">esc</span>
            <span>restart</span>
        </div>

        <button id="close-rules-btn"><i class="fas fa-long-arrow-alt-left"></i> </button>


    </div>
    <button id="color-mode-btn"><i class="fas fa-lightbulb"></i></button>

    <H1>Breakout!</H1>
    <form action="" id="run-game-form">
        <input type="text" name="name" maxlength="15" placeholder="Enter your name...">
        <button id="run-game-btn" type="submit">Run</button>
    </form>

`
export default startTemplate;
import {

    FAST_BALL_dX,
    INITIAL_BALL_dX,
    INITIAL_PADDLE_WIDTH,
    MIDDLE_BALL_dX,
    MIDDLE_PADDLE_WIDTH,
    SMALL_PADDLE_WIDTH

} from "../../constants.js";


const settingsTemplate = `

    <div class="banner banner-info"></div>

    <div class="asside-buttons">
        <button class="back-btn "><i class="fas fa-backward"></i></button>
    </div>
    
    <form action="" class="settings-from">
        <div class="speed-settings-fields">
            <h3>Ball speed</h3>

            <div class="settings-field">
                <input type="radio" id="speed_1" name="speed" value="${INITIAL_BALL_dX}" >
                <label for="speed_1">1x</label>
            </div>
            
            <div class="settings-field">
                <input type="radio" id="speed_2" name="speed" value="${MIDDLE_BALL_dX}">
                <label for="speed_2">1.5x</label>
            </div>

            <div class="settings-field">
                <input type="radio" id="speed_3" name="speed" value="${FAST_BALL_dX}">
                <label for="speed_3">2x</label>
            </div>
        </div>

        <div class="paddle-settings-fields">
            <h3>Paddle size</h3>

            <div class="settings-field">
                <input type="radio" id="size_1" name="size" value="${INITIAL_PADDLE_WIDTH}" checked>
                <label for="size_1">1x</label>
            </div>

            <div class="settings-field">
                <input type="radio" id="size_2" name="size" value="${MIDDLE_PADDLE_WIDTH}">
                <label for="size_2">0.75x</label>
            </div>


            <div class="settings-field">
                <input type="radio" id="size_3" name="size" value="${SMALL_PADDLE_WIDTH}">
                <label for="size_3">0.5x</label>
            </div>
        </div>
        
        <button id="settings-submit-btn" type="submit">Done</button>
    </form>
`

export default settingsTemplate;
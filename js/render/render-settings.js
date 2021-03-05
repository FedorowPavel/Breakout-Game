import backToMain from "./../go-to-main.js";
import ball from "../canvas/objects/ball.js";
import { navigateToUrl } from "../routing.js";
import sounds from "../audio/audio-sounds.js";
import paddle from "../canvas/objects/paddle.js";
import storageService from "../storage-service.js";
import { setCheckedInputs, showBanner } from "../utils.js";
import settingsTemplate from "../templates/pages/settings-page.js";



function renderSettingsPage() {

    const game = JSON.parse(storageService.get('game'));

    const container = document.getElementById('container');
    container.innerHTML = settingsTemplate;


    const infoBanner = document.querySelector('.banner.banner-info');
    infoBanner.innerHTML = `${game.currentPlayer}, set difficulty`;

    setTimeout(() => { showBanner(infoBanner) }, 500);

    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', backToMain);

    const settingsForm = document.querySelector('.settings-from');
    settingsForm.addEventListener('submit', submitSettings);


    //set showing current setting 
    // when render settings
    const speedInputs = Array.from(document.querySelectorAll('.speed-settings-fields input'));
    const paddleInputs = Array.from(document.querySelectorAll('.paddle-settings-fields input'));
    setCheckedInputs(paddleInputs, paddle.width)
    setCheckedInputs(speedInputs, ball.dX || ball.tempDX)


    sounds.renderPageSound();
}



function submitSettings(event) {

    event.preventDefault();

    const formData = new FormData(event.target);
    const ballSpeed = formData.get('speed');
    const paddleSize = formData.get('size');

    ball.setSpeed(ballSpeed);
    paddle.setWidth(paddleSize);
    
    paddle.setInitialPaddlePos()


    navigateToUrl(`/main`);

    event.target.reset();
}

export default renderSettingsPage;
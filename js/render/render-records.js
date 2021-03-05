import backToMain from "../go-to-main.js";
import sounds from "../audio/audio-sounds.js";
import { COUNT_SHOWING_RECORDS } from "../constants.js";
import renderRecords from "../records/render-records.js";
import recordsTemplate from "../templates/pages/records-page.js";

function renderRecordsPage() {

    const container = document.getElementById('container');
    container.innerHTML = recordsTemplate;

    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', backToMain);

    renderRecords(COUNT_SHOWING_RECORDS);

    sounds.renderPageSound();
}


export default renderRecordsPage;
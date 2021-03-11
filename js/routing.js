import {
    
    INDEX_URL,
    MAIN_URL,
    RECORDS_URL,
    SETTINGS_URL

} from './constants.js';

import game from './game.js';
import renderMainPage from './render/render-main.js';
import renderInitialPage from './render/render-initial.js';
import renderSettingsPage from './render/render-settings.js';
import renderRecordsPage from './render/render-records.js';

export function renderPage() {
    const { pathname: currentUrl } = window.location;


    if (!game.currentPlayer) {
        window.history.pushState({}, null , window.location.origin + INDEX_URL[0]);
        renderInitialPage();
        return
    }

    if (INDEX_URL.includes(currentUrl)) {
        renderInitialPage();
        return
    }


    if ( MAIN_URL.includes(currentUrl)) {
        renderMainPage();
        return
    }

    if (SETTINGS_URL.includes(currentUrl)) {
        renderSettingsPage();
        return
    }

    if (RECORDS_URL.includes(currentUrl)) {
        renderRecordsPage()
        return
    }

}

export function navigateToUrl(url) {
    window.history.pushState(
        {},
        url,
        window.location.origin + url
    );
    renderPage();
}

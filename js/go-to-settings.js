import { SETTINGS_URL } from "./constants.js";
import { navigateToUrl } from "./routing.js";

function goToSettings(intId) {
    clearInterval(intId);
    navigateToUrl(SETTINGS_URL[0]);
    return
}

export default goToSettings;
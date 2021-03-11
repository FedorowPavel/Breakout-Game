import { MAIN_URL } from "./constants.js";
import { navigateToUrl } from "./routing.js";

function backToMain() {
    navigateToUrl(MAIN_URL[0]);
    return
}

export default backToMain;
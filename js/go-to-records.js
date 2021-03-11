import { RECORDS_URL } from "./constants.js";
import { navigateToUrl } from "./routing.js";

function goToRecords(intId) {
    clearInterval(intId);
    navigateToUrl(RECORDS_URL[0]);
    return
}

export default goToRecords;
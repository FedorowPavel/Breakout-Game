import { navigateToUrl } from "./routing.js";

function goToRecords(intId) {
    clearInterval(intId);
    navigateToUrl('/records');
    return
}

export default goToRecords;
import game from "../game.js";
import recordsList from "./records.js";
import storageService from "../storage-service.js";

function writeRecord() {

    const date = new Date();

    const newRecord = {
        player: game.currentPlayer,
        record: game.score,
        date: date.toLocaleString(),
    }

    if (!newRecord.record) {
        return
    }

    recordsList.setRecord(newRecord);

    storageService.set('records', JSON.stringify(recordsList.records))
}

export default writeRecord;
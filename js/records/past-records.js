import storageService from "../storage-service.js";

function renderRecords(countToShow) {

    const recordsContainer = document.querySelector('.records');

    const recordsListing = document.getElementById('records-list');
    
    const arrayOfRecords = JSON.parse(storageService.get('records'))

    if (!arrayOfRecords || arrayOfRecords.length === 0) {

        recordsContainer.innerHTML = `

            <div class="no-records-text">
                <p>Sorry, no records still</p>
                <p>Best chance to become the FIRST!<p>
            </div>
        `

    }

    const sortedArray = arrayOfRecords.sort((a, b) => +a.record < +b.record ? 1 : -1);

    let place = 0;

    sortedArray.forEach(item => {

        if (!item.record) {
            return
        }
        
        if (place < countToShow) {

            const newListItem = document.createElement('li');

            const dateWithoutMs = item.date.slice(0, item.date.length-3)

            newListItem.innerHTML = `

                <span class="index-col">${place+1}</span>
                <span class="record-col">${item.record}</span>
                <span class="player-col">${item.player} <span class="date-col">${dateWithoutMs}</span></span>
            
            `
            recordsListing.appendChild(newListItem);

            place++
        } 
    })
}

export default renderRecords;
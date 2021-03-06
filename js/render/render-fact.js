import getApiData from "./get-Api-Data.js";

function renderFact() {
    const factContainer = document.querySelector('.fact-container');
    const span = factContainer.querySelector('span');

    if (span) {
        //delete previous span
        span.parentNode.removeChild(span)
    }
    
    const newSpan = document.createElement('span');


    getApiData()
        .then(data => {
        
            newSpan.innerHTML = `<i class="fas fa-info-circle"></i>${data}`;

            factContainer.appendChild(newSpan);
        })
        .then(() => {
            factContainer.classList.add('show');
        });

}



export default renderFact;

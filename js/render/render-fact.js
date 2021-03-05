import game from "../game.js";

function renderFact() {
    const factContainer = document.querySelector('.fact-container');
    const span = factContainer.querySelector('span');

    if (span) {
        //delete previous span
        span.parentNode.removeChild(span)
    }
    
    const newSpan = document.createElement('span');

    async function getData() {
        const response = await fetch(`http://numbersapi.com/${game.score}`);

        return await response.text();
    }

    getData()
        .then(data => {
        
            newSpan.innerHTML = `<i class="fas fa-info-circle"></i> ${data}`;

            factContainer.appendChild(newSpan);
        })
        .then(() => {
            factContainer.classList.add('show');
        });

}

export default renderFact;

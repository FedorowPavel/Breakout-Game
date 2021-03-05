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
        // const response = await fetch(`http://numbersapi.com/${game.score}`);

        const response = await fetch(
            `https://numbersapi.p.rapidapi.com/${game.score}/trivia?fragment=true&json=true`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "8ef55797fbmshcc02ccb4b852999p196e82jsn3b9b33ca70c3",
                "x-rapidapi-host": "numbersapi.p.rapidapi.com"
            }
        })

        const json = await response.json()


        return await `${json.number} - ${json.text}`; 
    }

    getData()
        .then(data => {
        
            newSpan.innerHTML = `<i class="fas fa-info-circle"></i>${data}`;

            factContainer.appendChild(newSpan);
        })
        .then(() => {
            factContainer.classList.add('show');
        });

}

export default renderFact;

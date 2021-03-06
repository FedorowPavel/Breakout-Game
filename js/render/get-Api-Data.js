import game from "../game.js";
import { NUMBERS_API_KEY } from "../constants.js";


async function getApiData() {

        const response = await fetch(
            `https://numbersapi.p.rapidapi.com/${game.score}/trivia?fragment=true&json=true`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${NUMBERS_API_KEY}`,
                "x-rapidapi-host": "numbersapi.p.rapidapi.com"
            }
        })

        const json = await response.json()


        return `${json.number} - ${json.text}`; 
}

export default getApiData;
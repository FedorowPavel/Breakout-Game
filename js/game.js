class Game {
    constructor() {
        this.started = false;
        this.currentPlayer = null;
        this.score = 0;
        this.gameOver = false;
    }


    setCurrentUser(userName) {
        this.currentPlayer = userName;
    }

    deleteCurrentUser() {
        this.currentPlayer = null;
    }

    increaseScore() {
        this.score += 1;
    }

    startGame() {
        this.started = true;
    }

    endGame() {
        this.gameOver = true;
    }
}


const game = new Game();

export default game;
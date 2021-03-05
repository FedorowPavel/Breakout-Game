class Sounds {
    constructor() {
        this.myAudio = new Audio;
    }

    showRulesSound() {
        this.myAudio.src = "audio-files/rules-btn.wav";
        this.myAudio.play();
    }

    switchColorThemeSound() {
        this.myAudio.src = "audio-files/turn-light-btn.mp3";
        this.myAudio.play();
    }

    errorSound() {
        this.myAudio.src = "audio-files/error.mp3";
        this.myAudio.play();
    }

    renderPageSound() {
        this.myAudio.src = "audio-files/popstate.mp3";
        this.myAudio.play();
    }

    brickBreakSound() {
        this.myAudio = new Audio;
        this.myAudio.src = "audio-files/brick-broken.mp3";
        this.myAudio.play();
    }

    paddleMoveSound() {
        this.myAudio = new Audio;
        this.myAudio.src = "audio-files/paddle-move.mp3";
        this.myAudio.play();
    }

    gameOverSound() {

        this.myAudio.src = "audio-files/game-over.mp3";
        this.myAudio.play();
    }
}

const sounds = new Sounds;

export default sounds;

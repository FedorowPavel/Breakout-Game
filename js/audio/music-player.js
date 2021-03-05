import storageService from "../storage-service.js";

import {

    AUDIO_SRC,
    COVER_SRC,
    SONGS_LIST,
    START_SONG_INDEX

} from "../constants.js";


const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const playBtn = document.getElementById('play');
const tittle = document.getElementById('tittle');
const volumeSize = document.getElementById('volume');
const volumeBtn = document.getElementById('volume-btn');
const musicContainer = document.getElementById('music_container');




class MusicPlayer {
    constructor() {
        this.currentSongIndex = START_SONG_INDEX;
        this.songList = SONGS_LIST;
        this.audioSrc = AUDIO_SRC;
        this.coverSrc = COVER_SRC; 

        this.loadSong();

        this.updateVolumeSize();
    }

    loadSong() {
        const song = this.songList[this.currentSongIndex];

        tittle.innerText = song;
        
        audio.src = `/${this.audioSrc}/${song}.mp3`;
        cover.src = `/${this.coverSrc}/${song}.jpg`;
    }

    playSong() {
        musicContainer.classList.add('play');
        playBtn.querySelector('i.fas').classList.remove('fa-play');
        playBtn.querySelector('i.fas').classList.add('fa-pause');

        audio.play();
    }


    pauseSong() {
        musicContainer.classList.remove('play');
        playBtn.querySelector('i.fas').classList.add('fa-play');
        playBtn.querySelector('i.fas').classList.remove('fa-pause');

        audio.pause();
    }

    prevSong() {
        this.currentSongIndex--;

        if (this.currentSongIndex < 0) {
            this.currentSongIndex = this.songList.length - 1;
        }

        this.loadSong();

        this.playSong();

        storageService.set('musicPlayer', JSON.stringify(musicPlayer));
    }

    nextSong() {
        this.currentSongIndex++;

        if (this.currentSongIndex > this.songList.length - 1) {
            this.currentSongIndex = 0;
        }

        this.loadSong();

        this.playSong();

        storageService.set('musicPlayer', JSON.stringify(musicPlayer));
    }

    updateProgressLine(event) {
        const { duration, currentTime } = event.srcElement;

        const progressPercents = (currentTime / duration) * 100;

        progress.style.width = `${progressPercents}%`;
    }

    setProgressLine(event) {
        const width = this.clientWidth;

        const clickPosX = event.offsetX;

        const duration = audio.duration;

        audio.currentTime = (clickPosX / width) * duration;
    }

    setVolumeValue(event) {

        if (!audio.volume) {
            return
        }

        const height = this.clientHeight;

        const clickPosY = event.offsetY;

        audio.volume = clickPosY / height;

        musicPlayer.updateVolumeSize();
        
    }

    updateVolumeSize() {

        if (!audio.volume) {
            return
        }

        const volumeValue = audio.volume;

        const volumePrecents = volumeValue * 100;

        volumeSize.style.height = `${volumePrecents}%`
    }

    togleVolume() {
        if (audio.volume) {

            volumeBtn.querySelector('i.fas').classList.remove('fa-volume-up');
            volumeBtn.querySelector('i.fas').classList.add('fa-volume-mute');

            audio.volume = 0;

            
        } else {

            volumeBtn.querySelector('i.fas').classList.remove('fa-volume-mute');
            volumeBtn.querySelector('i.fas').classList.add('fa-volume-up');

            audio.volume = 1;

        }
    }

}

    


const musicPlayer = new MusicPlayer();

storageService.set('musicPlayer', JSON.stringify(musicPlayer));

export default musicPlayer;


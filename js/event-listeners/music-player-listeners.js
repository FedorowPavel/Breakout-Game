import musicPlayer from '../audio/music-player.js';

export function setMusicPlayerEventListeners() {
    
    //элементы музыкального плеера
    const musicContainer = document.getElementById('music_container');
    const progressContainer = document.getElementById('progress_container');
    const volumeSizeContainer = document.getElementById('volume_container');

    const playBtn = document.getElementById('play');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const volumeBtn = document.getElementById('volume-btn');

    const audio = document.getElementById('audio');

    const currentSong = musicPlayer.currentSongIndex;

    //ивенты музыкального плеера
    playBtn.addEventListener('mousedown', () => {
        const isPlaying = musicContainer.classList.contains('play');

        isPlaying ? musicPlayer.pauseSong() : musicPlayer.playSong();
    })

    prevBtn.addEventListener(
        'mousedown',
        function () { musicPlayer.prevSong(currentSong) }
    );

    nextBtn.addEventListener(
        'mousedown',
        function () { musicPlayer.nextSong(currentSong) }
    );

    audio.addEventListener('timeupdate', musicPlayer.updateProgressLine);



    progressContainer.addEventListener('mousedown', musicPlayer.setProgressLine);

    audio.addEventListener(
        'ended',
        function () { musicPlayer.nextSong(currentSong) }
    );

    volumeBtn.addEventListener('mousedown', musicPlayer.togleVolume)

    volumeSizeContainer.addEventListener('mousedown', musicPlayer.setVolumeValue)
}

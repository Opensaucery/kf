const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const seekBar = document.getElementById('seek-bar');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const trackButtons = document.querySelectorAll('.track');

// Play or pause the audio
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Update the seek bar and time display
audio.addEventListener('timeupdate', () => {
    const value = (100 / audio.duration) * audio.currentTime;
    seekBar.value = value;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

// Update the audio's current time when the seek bar is changed
seekBar.addEventListener('input', () => {
    const value = seekBar.value * (audio.duration / 100);
    audio.currentTime = value;
});

// Set the audio duration when the audio's metadata is loaded
audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
});

// Switch tracks
trackButtons.forEach(button => {
    button.addEventListener('click', ()

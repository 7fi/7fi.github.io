let musicPlaying = false;
const music = () => {
  if (musicPlaying === false) {
    musicPlaying = true;
    let backAudio = document.createElement('audio');
    backAudio.autoplay = true;
    backAudio.setAttribute('src', 'https://krunker.io/sound/ambient_9.mp3');
    backAudio.play()
    backAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
  }

}
let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
audio.volume = e.currentTarget.value / 100;
})
let musicPlaying = false;

function music() {
	if (!musicPlaying) {
		musicPlaying = true;
	let backAudio = document.createElement('audio');
		backAudio.autoplay = true;
		backAudio.setAttribute('src','/assets/audio/dipperly.mp3');
		backAudio.volume = 0.1;
		backAudio.play();
		backAudio.addEventListener('ended', () => {
			this.currentTime = 0;
			this.play();
		}, false);
	}
}

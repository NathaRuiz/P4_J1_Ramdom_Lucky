document.addEventListener('DOMContentLoaded', function () {
  const customCursor = document.createElement('div');
  customCursor.classList.add('custom-cursor');
  document.body.appendChild(customCursor);
  document.addEventListener('mousemove', function (e) {
    const x = e.clientX - customCursor.offsetWidth / 2;
    const y = e.clientY - customCursor.offsetHeight / 2;
    customCursor.style.left = x + 'px';
    customCursor.style.top = y + 'px';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const customCursor = document.createElement('div');
  customCursor.classList.add('custom-cursor');
  document.body.appendChild(customCursor);
  document.addEventListener('mousemove', function (e) {
    const x = e.clientX - customCursor.offsetWidth / 2;
    const y = e.clientY - customCursor.offsetHeight / 2;
    customCursor.style.left = x + 'px';
    customCursor.style.top = y + 'px';
  });
  const cards = document.querySelectorAll('.cardGame');
  cards.forEach(card => {
    card.addEventListener('click', function () {
      const cardUrl = this.querySelector('a').getAttribute('href');
      window.location.href = cardUrl;
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const backgroundAudio = document.getElementById('backgroundAudio');
  const toggleAudioButton = document.getElementById('toggleAudio');
  const volumeIcon = document.getElementById('volumeIcon');
  const playPauseIcon = document.getElementById('playPauseIcon');

  let isMuted = false;
  let isPaused = false;

  function toggleVolumeIcon() {
    isMuted = !isMuted;
    volumeIcon.className = isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    backgroundAudio.muted = isMuted;
  }
  function togglePlayPauseIcon() {
    isPaused = !isPaused;
    playPauseIcon.className = isPaused ? 'fas fa-play' : 'fas fa-pause';
    isPaused ? backgroundAudio.pause() : backgroundAudio.play();
  }
  toggleAudioButton.addEventListener('click', function () {
    toggleVolumeIcon();
    togglePlayPauseIcon();
  });
});

//función para el mouse varita


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


//función mouse para que haga click y lleve a página de juegos porque noooo funcionaba el a

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
      // Obtén la URL de la tarjeta según tus necesidades
      const cardUrl = this.querySelector('a').getAttribute('href');
      // Redirige a la URL
      window.location.href = cardUrl;
    });
  });
});


//funcion audio para que no suene cuando inicia

document.addEventListener('DOMContentLoaded', function () {
  const backgroundAudio = document.getElementById('backgroundAudio');
  const toggleAudioButton = document.getElementById('toggleAudio');
  const volumeIcon = document.getElementById('volumeIcon');
  const playPauseIcon = document.getElementById('playPauseIcon');

  // Estado inicial
  let isMuted = false;
  let isPaused = false;

  // Función para cambiar el icono del volumen
  function toggleVolumeIcon() {
    isMuted = !isMuted;
    volumeIcon.className = isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    backgroundAudio.muted = isMuted;
  }

  // Función para cambiar el icono de reproducción/pausa
  function togglePlayPauseIcon() {
    isPaused = !isPaused;
    playPauseIcon.className = isPaused ? 'fas fa-play' : 'fas fa-pause';
    isPaused ? backgroundAudio.pause() : backgroundAudio.play();
  }

  // Evento de clic para el botón de control de audio
  toggleAudioButton.addEventListener('click', function () {
    toggleVolumeIcon();
    togglePlayPauseIcon();
  });
});

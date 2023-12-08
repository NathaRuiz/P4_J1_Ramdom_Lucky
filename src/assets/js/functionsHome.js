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
      // Obtén la URL de la tarjeta según tus necesidades
      const cardUrl = this.querySelector('a').getAttribute('href');
      // Redirige a la URL
      window.location.href = cardUrl;
    });
  });
});

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



document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const body = document.getElementById('body');
    const imageContainer = document.querySelector('.image-container img');
    const images = [
        './img/fotito2.png',
        './img/fotito4.png',
        './img/fotito5.png',
        './img/fotito3.png'
    ];
    let currentImageIndex = 0;

    // Configurar el volumen inicial
    audio.volume = 0.25;

    // Función para cambiar el fondo según el estado del audio
    function updateBackground() {
        if (audio.paused) {
            body.classList.remove('playing');
            body.classList.add('paused');
        } else {
            body.classList.remove('paused');
            body.classList.add('playing');
        }
    }

    // Actualizar el fondo cuando el audio empieza o se pausa
    audio.addEventListener('play', updateBackground);
    audio.addEventListener('pause', updateBackground);

    // Configuración inicial
    updateBackground();

    // Función para cambiar la imagen
    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageContainer.src = images[currentImageIndex];
    }

    // Cambiar la imagen cada 5 segundos
    setInterval(changeImage, 5000);
});

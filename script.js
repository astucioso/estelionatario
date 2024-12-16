// script.js

document.getElementById('revealButton').addEventListener('click', function() {
    // Iniciar a música
    var audio = document.getElementById('background-music');
    audio.play();  // Inicia a reprodução da música

    // Esconde a tela inicial (botão e texto)
    document.querySelector('.start-screen').style.display = 'none';

    // Exibe os perfis
    document.getElementById('profiles-container').style.display = 'flex';
});

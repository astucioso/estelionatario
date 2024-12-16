
document.getElementById('revealButton').addEventListener('click', function() {
    var audio = document.getElementById('background-music');
    audio.play();

    document.querySelector('.start-screen').style.display = 'none';

    document.getElementById('profiles-container').style.display = 'flex';
});

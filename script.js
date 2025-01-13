function updateProfileImage(userId) {
  fetch('https://api.lanyard.rest/v1/users/' + userId)
    .then(response => response.json())
    .then(data => {
      const user = data.data.discord_user;
      const profileImage = document.querySelector('.profile-img[data-user-id="' + userId + '"]');
      const usernameElement = document.querySelector('.nickr[data-user-id="' + userId + '"]');
      const subnickElement = document.querySelector('.subnick[data-user-id="' + userId + '"]');
      const badgesContainer = document.getElementById('badges-' + userId); 
      
      profileImage.src = user.avatar
        ? 'https://cdn.discordapp.com/avatars/' + user.id + '/' + user.avatar + '.' + (user.avatar.startsWith('a_') ? 'gif' : 'png') + '?size=512'
        : 'https://cdn.discordapp.com/embed/avatars/1.png';
  
      usernameElement.textContent = user.display_name ? user.display_name : user.username;
      subnickElement.textContent = user.username;
  
      badgesContainer.innerHTML = ''; 
      if (user.public_flags && user.public_flags.badges) {
        for (let badge of user.public_flags.badges) {
          let badgeElement = document.createElement('div');
          badgeElement.className = 'badge';
          badgeElement.style.backgroundImage = badge.id === 'premium' 
            ? "url('https://raw.githubusercontent.com/Rep7/badges/main/svg/discordnitro.svg')" 
            : "url('https://raw.githubusercontent.com/mezotv/discord-badges/" + badge.id + ".svg')";
          badgeElement.dataset.tooltip = badge.description;
          badgesContainer.appendChild(badgeElement);
        }
      }
    })
    .catch(error => {
      console.error('Error fetching profile data:', error);
    });
}

updateProfileImage('748940599150772344');  // Kauan
updateProfileImage('1139957418823008318');  // Vokal estora xota
updateProfileImage('1171492628831928322');  // Lowest
updateProfileImage('784552912038133760');  // Hizz

document.getElementById('revealButton').addEventListener('click', function() {
    var audio = document.getElementById('background-music');
    audio.play();

    document.querySelector('.start-screen').style.display = 'none';

    document.getElementById('profiles-container').style.display = 'flex';

    document.getElementById('banner-text').style.display = 'block';

});

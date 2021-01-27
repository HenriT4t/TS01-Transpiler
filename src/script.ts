console.log('OK… le fichier js/script.js est bien disponible est chargé.');

let infoElement = document.getElementById('info');

if (infoElement !== null) {
  infoElement.innerHTML = 'Le script JS a bien été éxécuté'
  infoElement.className = 'success';
}
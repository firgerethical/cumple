
function cargar() {
    const nusica = document.getElementById('musica')
}

document.addEventListener('keydown', function (evento){
    if (evento.key == 32) {
        musica.innerHTML = '<audio src="/music/King Gizzard & The Lizard Wizard - Robot Stop - Live in Sydney (320 kbps).mp3" autoplay>'
    }
})

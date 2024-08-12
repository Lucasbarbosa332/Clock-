const $ = (id) => {
    return document.getElementById(id);
};

const $days = $('days');
const $hours = $('hours');
const $minutes = $('minutes');
const $seconds = $('seconds');

const updateTimer = () => {
    const currentTime = new Date();

    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();
    const days = currentTime.getDate();

    const format = (num) => {
        return `${num}`.padStart(2, '0');
    };

    $seconds.innerText = format(seconds);
    $minutes.innerText = format(minutes);
    $hours.innerText = format(hours);
    $days.innerText = format(days);
};

updateTimer(); // Chamada inicial para sincronizar imediatamente

setInterval(updateTimer, 1000); // Atualiza o relógio a cada segundo

const createSnowflake = () => {
    const $snow = document.createElement('i');
    $snow.classList.add('fas', 'fa-snowflake', 'snowflake');

    $snow.style.left = `${Math.random() * window.innerWidth}px`;
    $snow.style.animationDuration = `${(Math.random() * 3 + 2)}s`;
    $snow.style.opacity = Math.random();
    $snow.style.fontSize = `${Math.random() * 20}px`;
    $snow.style.filter = 'blur(1px)';

    document.body.appendChild($snow);

    $snow.addEventListener('animationend', () => {
        $snow.remove();
    });

    requestAnimationFrame(createSnowflake);
};

requestAnimationFrame(createSnowflake);

document.addEventListener('DOMContentLoaded', function() {
    const audio = new Audio('/img/Áudio do WhatsApp de 2024-04-07 à(s) 14.47.38_c5fb6a97.mp3');
    const playButton = document.createElement('button');
    playButton.textContent = '▶️ Play Música';
    playButton.classList.add('play-button');
    document.body.appendChild(playButton);

    let isPlaying = false;

    playButton.addEventListener('click', function() {
        if (!isPlaying) {
            audio.play();
            playButton.textContent = '⏸️ Pausar Música';
            isPlaying = true;

            // Inicia a chuva após 20 segundos
            setTimeout(() => {
                startRain();
            }, 20000);

            // Inicia as folhas de sakura após 40 segundos
            setTimeout(() => {
                startSakuraLeaves();
            }, 40000);
        } else {
            audio.pause();
            playButton.textContent = '▶️ Play Música';
            isPlaying = false;
        }

        // Adiciona classe de animação ao botão
        playButton.classList.add('animate');

        // Remove classe de animação após um intervalo de tempo
        setTimeout(function() {
            playButton.classList.remove('animate');
        }, 1000); // Duração da animação em milissegundos
    });
});

const startRain = () => {
    // Lógica para fazer a chuva cair
    console.log('Chuva começou!');
};

const startSakuraLeaves = () => {
    // Lógica para fazer as folhas de sakura caírem
    console.log('Folhas de sakura começaram a cair!');
};


let context = new (window.AudioContext || window.webkitAudioContext)();
let oscillators = {};

function playFrequency(frequency) {
    let oscillator = context.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    oscillator.connect(context.destination);
    oscillator.start();
    return oscillator;
}

function stopPlaying(oscillator) {
    oscillator.stop();
    oscillator.disconnect();
}

document.addEventListener('keydown', function (event) {
    let key = event.key.toLowerCase();
    let frequency;

    switch (key) {
        case 'a':
            frequency = 2308.48; // A
            break;
        case 's':
            frequency = 400.88; // B
            break;
        case 'd':
            frequency = 845.49; // C
            break;
        case 'f':
            frequency = 845.49; // C
            break;
        case 'g':
            frequency = 845.49; // C
            break;
        case 'h':
            frequency = 845.49; // C
            break;
        case 'j':
            frequency = 845.49; // C
            break;
        case 'k':
            frequency = 845.49; // C
            break;
        case 'l':
            frequency = 845.49; // C
            break;
        case 'ç':
            frequency = 845.49; // C
            break;
        // Adicione mais notas conforme necessário
        default:
            return;
    }

    if (!oscillators[key]) {
        oscillators[key] = playFrequency(frequency);
    }
});

document.addEventListener('keyup', function (event) {
    let key = event.key.toLowerCase();
    if (oscillators[key]) {
        stopPlaying(oscillators[key]);
        delete oscillators[key];
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const audio = new Audio('puresouls.mp3');
    audio.volume = 0.5; // Set initial volume to 60%

    // Function to fade in the audio
    const fadeInAudio = () => {
        let volume = 0;
        audio.volume = volume;
        const fadeInInterval = setInterval(() => {
            volume += 0.01;
            if (volume >= 0.6) {
                volume = 0.6;
                clearInterval(fadeInInterval);
            }
            audio.volume = volume;
        }, 120); // 20ms interval for smooth fade-in over 2 seconds
    };

    // Function to fade out the audio
    const fadeOutAudio = () => {
        let volume = 0.6;
        const fadeOutInterval = setInterval(() => {
            volume -= 0.01;
            if (volume <= 0) {
                volume = 0;
                clearInterval(fadeOutInterval);
                audio.pause();
            }
            audio.volume = volume;
        }, 120); // 100ms interval for smooth fade-out over 10 seconds
    };

    audio.addEventListener('ended', function() {
        setTimeout(() => {
            fadeOutAudio();
        }, 3000); // 3 seconds pause before fade-out
    });

    fadeInAudio(); // Start fade in when the page loads
    audio.play();
});

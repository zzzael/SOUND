document.addEventListener('DOMContentLoaded', function() {
    const audio = new Audio('puresouls.mp3');
    audio.volume = 0.4; // Set the volume to 60%
    
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
    
    audio.addEventListener('ended', function() {
        setTimeout(() => {
            fadeInAudio();
            audio.play();
        }, 3000); // 3 seconds pause
    });

    fadeInAudio(); // Start fade in when the page loads
    audio.play();
});

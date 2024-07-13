document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const hashKeyInput = document.getElementById('hash-key').value.trim();
    const errorMessage = document.getElementById('error-message');

    const fixedKey = 'SOUND';

    if (hashKeyInput === fixedKey) {
        window.location.href = 'loading.html';
    } else {
        fetch('./datakeys.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const validKeys = Object.values(data);
                if (validKeys.includes(hashKeyInput)) {
                    window.location.href = 'sound.html';
                } else {
                    errorMessage.textContent = '???';
                }
            })
            .catch(error => {
                console.error('Error fetching or parsing JSON:', error);
                errorMessage.textContent = 'Error validating HASH-KEY';
            });
    }
});

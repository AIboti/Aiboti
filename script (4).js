
document.getElementById('submitBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    fetch('https://api.example.com/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer DEIN_API_SCHLÜSSEL'
        },
        body: JSON.stringify({
            prompt: inputText,
            maxTokens: 100
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').textContent = data.choices[0].text;
    })
    .catch(error => {
        console.error('Fehler:', error);
        document.getElementById('response').textContent = 'Ein Fehler ist aufgetreten.';
    });
});

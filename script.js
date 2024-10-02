function filterGames() {
    const input = document.getElementById('search-input').value.toLowerCase().trim().replace(/\s+/g, ' ');
    const cards = document.querySelectorAll('.game-card');

    cards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase().trim().replace(/\s+/g, ' ');
        
        // Check for matches
        if (name.includes(input) || isCloseMatch(name, input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

function isCloseMatch(name, input) {
    // Example: Checking for common misspellings or extra spaces
    const words = input.split(' ');
    return words.some(word => name.includes(word));
}

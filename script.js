function filterGames() {
    const input = document.getElementById('search-input').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.game-card');

    cards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase().trim();
        const words = input.split(/\s+/);
        const matches = words.every(word => name.includes(word));

        card.style.display = matches ? '' : 'none';
    });
}

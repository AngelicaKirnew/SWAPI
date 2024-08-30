document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://swapi.dev/api/people/';
    const characterList = document.getElementById('character-list');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(character => {
                const card = document.createElement('div');
                card.className = 'character-card';
                card.innerHTML = `
                    <h2>${character.name}</h2>
                    <p>Height: ${character.height} cm</p>
                    <p>Mass: ${character.mass} kg</p>
                    <p>Gender: ${character.gender}</p>
                `;
                characterList.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

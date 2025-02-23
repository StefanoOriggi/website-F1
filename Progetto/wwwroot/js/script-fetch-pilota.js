document.addEventListener('DOMContentLoaded', function () {
    const pilotDivs = document.querySelectorAll('.team');

    pilotDivs.forEach(div => {
        div.addEventListener('click', function () {
            const playerId = this.id;
            redirectToPlayerPage(playerId);
        });
    });
});

function redirectToPlayerPage(playerId) {
    const apiUrl = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${playerId}`;
    localStorage.setItem('playerApiUrl', apiUrl);
    window.location.href = 'piloti-click.html';
}

// Funzione per caricare i dati del pilota nella nuova pagina
async function fetchPlayerData() {
    // Recupera l'URL dell'API dal localStorage
    const apiUrl = localStorage.getItem('playerApiUrl');

    if (!apiUrl) {
        document.getElementById('player-data').innerHTML = "<p>Nessun dato trovato.</p>";
        return;
    }

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.player && data.player.length > 0) {
            const player = data.player[0];

            const playerHtml = `
                <h2>${player.strPlayer}</h2>
                <p>Nazionalità: ${player.strNationality}</p>
                <p>Squadra: ${player.strTeam}</p>
                <p>Sport: ${player.strSport}</p>
                <p>Descrizione: ${player.strDescriptionEN}</p>
                <img src="${player.strThumb}" alt="${player.strPlayer}" style="width: 200px;">
            `;

            document.getElementById('player-data').innerHTML = playerHtml;
        } else {
            document.getElementById('player-data').innerHTML = "<p>Nessun dato trovato per questo pilota.</p>";
        }
    } catch (error) {
        console.error("Errore durante il recupero dei dati:", error);
        document.getElementById('player-data').innerHTML = "<p>Si è verificato un errore durante il recupero dei dati.</p>";
    }
}
window.onload = fetchPlayerData;
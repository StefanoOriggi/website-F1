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

async function fetchPlayerData() {
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
                
                <p style="font-weight: bold;">Team</p
                <p id="squadra">${player.strTeam}</p>

                <p style="font-weight: bold;">Birth place</p
                <p id="nazione">${player.strNationality}</p>
                
                <p style="font-weight: bold;">Description</p>
                <p id="desc">${player.strDescriptionEN}</p>
            `;

            document.getElementById('render').src = player.strRender;
            document.getElementById('fanart2').src = player.strFanart2;
            document.getElementById('fanart3').src = player.strFanart3;
            document.getElementById('fanart4').src = player.strFanart4;
            document.getElementById('player-data').innerHTML = playerHtml;

            let currentIndex = 0;
            const carouselInner = document.querySelector('.carousel-inner');
            const carouselItems = document.querySelectorAll('.carousel-item');
            const totalItems = carouselItems.length;

            function showNextItem() {
                const offset = -currentIndex * 100;
                carouselInner.style.transform = `translateX(${offset}%)`;
                currentIndex = (currentIndex + 1) % totalItems;
            }
            setInterval(showNextItem, 3500);
        }
        else
            document.getElementById('player-data').innerHTML = "<p>Nessun dato trovato per questo pilota.</p>";
    } catch (error) {
        console.error("Errore durante il recupero dei dati:", error);
        document.getElementById('player-data').innerHTML = "<p>Si è verificato un errore durante il recupero dei dati.</p>";
    }
}
window.onload = fetchPlayerData;
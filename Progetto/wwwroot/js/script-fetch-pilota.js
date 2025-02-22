document.addEventListener("DOMContentLoaded", function () {
    const teams = document.querySelectorAll(".team");
    teams.forEach(team => {
        team.addEventListener("click", function () {
            const liElement = this.querySelector("li");
            const driverInfo = liElement.innerText;

            const name = driverInfo.split("|")[0].trim().split(" ");
            const formattedName = name[0] + "_" + name[1];

            const url = this.getAttribute("data-url");
            if (url) {
                window.location.href = url;
            }
        });
    });
});


// URL dell'API
const apiUrl = "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Charles_Leclerc";
async function fetchPlayerData() {
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
            document.getElementById('player-data').innerHTML = "<p>Nessun dato trovato per Charles Leclerc.</p>";
        }
    } catch (error) {
        console.error("Errore durante il recupero dei dati:", error);
        document.getElementById('player-data').innerHTML = "<p>Si è verificato un errore durante il recupero dei dati.</p>";
    }
}

// Chiama la funzione per ottenere i dati
fetchPlayerData();
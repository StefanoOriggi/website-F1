document.addEventListener("DOMContentLoaded", function () {
    const teams = document.querySelectorAll(".team");

    teams.forEach(team => {
        team.addEventListener("click", function () {
            // Seleziona il tag <li> all'interno del div cliccato
            const liElement = this.querySelector("li");

            // Estrai il testo contenuto nel tag <li>
            const driverInfo = liElement.innerText;

            // Separa il nome del pilota e formattalo come "Nome_Cognome"
            const name = driverInfo.split("|")[0].trim().split(" ");
            const formattedName = name[0] + "_" + name[1];

            console.log("Nome formattato:", formattedName); // Debug: stampa il nome formattato

            // Chiama la funzione per recuperare i dati del pilota
            fetchPlayerData(formattedName);

            // Reindirizza alla pagina specificata in data-url, se presente
            const url = this.getAttribute("data-url");
            if (url) {
                window.location.href = url;
            }
        });
    });

    // Funzione per recuperare i dati del pilota
    async function fetchPlayerData(formattedName) {
        // URL dell'API con il nome formattato
        const apiUrl = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${formattedName}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.player && data.player.length > 0) {
                const player = data.player[0]; // Prendi il primo giocatore trovato

                // Crea il contenuto HTML con i dati del giocatore
                const playerHtml = `
                    <h2>${player.strPlayer}</h2>
                    <p>Nazionalità: ${player.strNationality}</p>
                    <p>Squadra: ${player.strTeam}</p>
                    <p>Sport: ${player.strSport}</p>
                    <p>Descrizione: ${player.strDescriptionEN}</p>
                    <img src="${player.strThumb}" alt="${player.strPlayer}" style="width: 200px;">
                `;

                // Inserisci i dati nel div con id "player-data"
                document.getElementById('player-data').innerHTML = playerHtml;
            } else {
                document.getElementById('player-data').innerHTML = `<p>Nessun dato trovato per ${formattedName}.</p>`;
            }
        } catch (error) {
            console.error("Errore durante il recupero dei dati:", error);
            document.getElementById('player-data').innerHTML = "<p>Si è verificato un errore durante il recupero dei dati.</p>";
        }
    }
});
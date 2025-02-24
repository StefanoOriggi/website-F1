document.addEventListener('DOMContentLoaded', function () {
    const teamDivs = document.querySelectorAll('.team');
    teamDivs.forEach(div => {
        div.addEventListener('click', function () {
            const teamId = this.id;
            redirectToTeamPage(teamId);
        });
    });
});

function redirectToTeamPage(teamId) {
    const apiUrl = `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${teamId}`;
    localStorage.setItem('teamApiUrl', apiUrl); // Salva l'URL dell'API nel localStorage
    window.location.href = 'scuderie-click.html'; // Reindirizza alla pagina dei dettagli del team
}

async function fetchTeamData() {
    const apiUrl = localStorage.getItem('teamApiUrl'); // Recupera l'URL dell'API dal localStorage

    if (!apiUrl) {
        document.getElementById('team-data').innerHTML = "<p>Nessun dato trovato.</p>";
        return;
    }

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.teams && data.teams.length > 0) {
            const team = data.teams[0]; // Prendi il primo team dalla risposta

            const teamHtml = `
                <div class="text-center">
                    <img src="${team.strBadge}" alt="${team.strTeam}" class="team-badge">
                    <h2>${team.strTeam}</h2>
                </div>
                <div class="team-info">
                    <p style="font-weight: bold;">League</p>
                    <p >${team.strLeague}</p>
                    
                    <p style="font-weight: bold;">Location</p>
                    <p >${team.strLocation}</p>

                    <p style="font-weight: bold;">Country</p>
                    <p >${team.strCountry}</p>
                    
                    <p style="font-weight: bold;">Website</p>
                    <a href="https://${team.strWebsite}">${team.strWebsite}</a>

                    <p style="font-weight: bold;">Description</p>
                    <p >${team.strDescriptionEN}</p>
                </div>
            `;

            document.getElementById('team-data').innerHTML = teamHtml;
        } else {
            document.getElementById('team-data').innerHTML = "<p>Nessun dato trovato per questo team.</p>";
        }
    } catch (error) {
        console.error("Errore durante il recupero dei dati:", error);
        document.getElementById('team-data').innerHTML = "<p>Si è verificato un errore durante il recupero dei dati.</p>";
    }
}

window.onload = fetchTeamData;
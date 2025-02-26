document.addEventListener('DOMContentLoaded', function () {
    const yearSelect = document.getElementById('year');
    const grandPrixSelect = document.getElementById('grandPrix');
    const searchForm = document.getElementById('searchForm');
    const resultsDiv = document.getElementById('results');
    const loadingDiv = document.getElementById('loading');
    const grandPrixList = [
        "Bahrain Grand Prix",
        "Saudi Arabian Grand Prix",
        "Australian Grand Prix",
        "Japanese Grand Prix",
        "Chinese Grand Prix Sprint",
        "Chinese Grand Prix",
        "Miami Grand Prix",
        "Emilia Romagna Grand Prix",
        "Monaco Grand Prix",
        "Canadian Grand Prix",
        "Spanish Grand Prix",
        "Austrian Grand Prix",
        "British Grand Prix",
        "Hungarian Grand Prix",
        "Belgian Grand Prix",
        "Dutch Grand Prix",
        "Italian Grand Prix",
        "Azerbaijan Grand Prix",
        "Singapore Grand Prix",
        "United States Grand Prix",
    ];

    grandPrixList.forEach(gp => {
        const option = document.createElement('option');
        option.value = gp;
        option.textContent = gp;
        grandPrixSelect.appendChild(option);
    });

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const year = yearSelect.value;
        const grandPrix = grandPrixSelect.value;

        if (year && grandPrix) {
            loadingDiv.style.display = 'block';
            resultsDiv.innerHTML = '';

            fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4370&s=${year}`)
                .then(response => response.json())
                .then(data => {
                    const event = data.events.find(event => event.strEvent === grandPrix);
                    if (event) {
                        const idEvent = event.idEvent;
                        fetch(`https://www.thesportsdb.com/api/v1/json/3/eventresults.php?id=${idEvent}`)
                            .then(response => response.json())
                            .then(data => {
                                const results = data.results;
                                if (results && results.length > 0) {
                                    const top3 = results.slice(0, 3);
                                    displayResults(top3);
                                } else {
                                    resultsDiv.innerHTML = '<p>Nessun risultato trovato.</p>';
                                }
                            })
                            .catch(error => {
                                console.error('Errore nel fetch dei risultati:', error);
                                resultsDiv.innerHTML = '<p>Errore nel caricamento dei risultati.</p>';
                            })
                            .finally(() => {
                                loadingDiv.style.display = 'none';
                            });
                    } else {
                        resultsDiv.innerHTML = '<p>Gran Premio non trovato per l\'anno selezionato.</p>';
                        loadingDiv.style.display = 'none';
                    }
                })
                .catch(error => {
                    console.error('Errore nel fetch degli eventi:', error);
                    resultsDiv.innerHTML = '<p>Errore nel caricamento degli eventi.</p>';
                    loadingDiv.style.display = 'none';
                });
        } else {
            resultsDiv.innerHTML = '<p>Seleziona un anno e un Gran Premio.</p>';
        }
    });

    function displayResults(top3) {
        resultsDiv.innerHTML = `
            <h3>Top 3 Piloti</h3>
            <ul>
                ${top3.map(pilot => `
                    <li>${pilot.strPlayer} - ${pilot.intPosition}</li>
                `).join('')}
            </ul>
        `;
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const filter = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll('#passwordTable tbody tr');
        rows.forEach(row => {
            const firstColumnText = row.cells[0].textContent.toLowerCase();
            if (firstColumnText.includes(filter)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});

function showAddPasswordPopup() {
    document.getElementById('addPasswordPopup').style.display = 'block';
}

function closeAddPasswordPopup() {
    document.getElementById('addPasswordPopup').style.display = 'none';
}

function AddPassword() {
    const site = document.getElementById('site').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (site && username && password) {
        const table = document.getElementById('passwordTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.textContent = site;
        cell2.textContent = username;
        cell3.textContent = password;

        newRow.style.display = 'table-row';
        closeAddPasswordPopup();
    } else {
        alert("Tutti i campi sono obbligatori!");
    }
}

function TogglePasswords() {

    const rows = document.querySelectorAll('#passwordTable tbody tr');
    rows.forEach(row => {
        const passwordCell = row.cells[2];
        if (passwordCell.textContent === '*******') {
            passwordCell.textContent = passwordCell.getAttribute('data-password');
        } else {
            passwordCell.setAttribute('data-password', passwordCell.textContent);
            passwordCell.textContent = '*******';
        }
    });
}

function showDeletePasswordPopup() {
    document.getElementById('deletePasswordPopup').style.display = 'block';
}

function closeDeletePasswordPopup() {
    document.getElementById('deletePasswordPopup').style.display = 'none';
}

function DeletePassword() {
    const site = document.getElementById('deleteSite').value;
    if (site) {
        const rows = document.querySelectorAll('#passwordTable tbody tr');
        let found = false;
        rows.forEach(row => {
            if (row.cells[0].textContent.toLowerCase() === site.toLowerCase()) {
                row.remove();
                found = true;
            }
        });
        if (!found) {
            alert("Non è stato trovato nessun sito con il nome inserito!");
        }
        closeDeletePasswordPopup();
    } else {
        alert("Il nome del sito è obbligatorio!");
    }
}
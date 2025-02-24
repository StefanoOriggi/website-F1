document.addEventListener("DOMContentLoaded", function () {
    const teams = document.querySelectorAll(".team");
    const name = document.getElementsByTagName("li").innerText;
    teams.forEach(team => {
        team.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            if (url) {
                window.location.href = url;
            }
        });
    });
});
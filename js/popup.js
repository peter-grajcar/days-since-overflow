const days = document.getElementById("days");

function setDays(historyItems) {
    for (let item of historyItems) {
        if (!item.url.startsWith("https://stackoverflow.com"))
            continue;

        let lastVisit = new Date(item.lastVisitTime);
        let today = new Date();
        let daysSinceLastVisit = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));
        days.textContent = daysSinceLastVisit;
        break;
    }
}

browser.history.search({
    text: "stackoverflow.com"
}).then(setDays);


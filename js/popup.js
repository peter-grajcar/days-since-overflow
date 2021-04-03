const days = document.getElementById("days");

function setDays(historyItems) {
    let re = new RegExp("^https?://stackoverflow.com.*")
    for (let item of historyItems) {
        if (!re.test(item.url))
            continue;

        let lastVisit = new Date(item.lastVisitTime);
        let today = new Date();
        let daysSinceLastVisit = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));
        days.textContent = daysSinceLastVisit;
        break;
    }
}

browser.history.search({
    text: "stackoverflow.com",
    startTime: 0
}).then(setDays);


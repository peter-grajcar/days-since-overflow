const days = document.getElementById("days");

function setDays(historyItems) {
    let lastVisit = new Date(historyItems[0].lastVisitTime);
    let today = new Date();
    let daysSinceLastVisit = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));
    days.innerHTML = daysSinceLastVisit;
}

browser.history.search({
    text: "stackoverflow.com",
    maxResults: 1
}).then(setDays);


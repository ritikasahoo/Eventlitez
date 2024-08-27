document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventLocation = document.getElementById('eventLocation').value;

    if (eventName && eventDate && eventTime && eventLocation) {
        addEvent(eventName, eventDate, eventTime, eventLocation);
        clearForm();
    }
});

function addEvent(name, date, time, location) {
    const eventList = document.getElementById('eventList');
    const eventItem = document.createElement('li');

    eventItem.innerHTML = `
        <strong>${name}</strong><br>
        Date: ${date}<br>
        Time: ${time}<br>
        Location: ${location}
    `;

    eventList.appendChild(eventItem);
}

function clearForm() {
    document.getElementById('eventForm').reset();
}

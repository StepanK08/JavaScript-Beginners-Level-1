document.addEventListener("DOMContentLoaded", function () {
    const currentTimeElement = document.getElementById("current-time");
    const motivationalImageElement = document.getElementById("motivational-image");
    const alarmListElement = document.getElementById("alarm-list");
    const addAlarmForm = document.getElementById("add-alarm-form");
  
    setInterval(updateCurrentTime, 1000);
    setDynamicBackgroundColor();
  
    loadAlarms();
  
    addAlarmForm.addEventListener("submit", function (event) {
      event.preventDefault();
      addAlarm();
    });
  
    setInterval(checkAndUpdateAlarms, 1000);
  
    const turnOffButton = document.getElementById("turn-off-button");
    turnOffButton.addEventListener("click", turnOffAlarm);
  });
  
  function updateCurrentTime() {
    const currentTimeElement = document.getElementById("current-time");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const currentTimeString = `${hours}:${minutes}:${seconds}`;
    currentTimeElement.textContent = currentTimeString;
  }
  

  
  function setDynamicBackgroundColor() {
    document.body.style.backgroundColor = "#000";
  }
  
  function loadAlarms() {
    const alarms = getAlarmsFromLocalStorage();
  
    const alarmListElement = document.getElementById("alarm-list");
    alarmListElement.innerHTML = "";
  
    alarms.forEach((alarm) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${alarm.title} - ${alarm.time}`;
      alarmListElement.appendChild(listItem);
    });
  }
  
  function addAlarm() {
    const titleInput = document.getElementById("alarm-title");
    const timeInput = document.getElementById("alarm-time");
  
    const title = titleInput.value.trim();
    const time = timeInput.value.trim();
  
    if (!title || !time) {
      alert("Please enter a unique title and a valid time for the alarm.");
      return;
    }
  
    const alarms = getAlarmsFromLocalStorage();

    if (alarms.some((alarm) => alarm.title === title)) {
      alert("Alarm with the same title already exists. Please choose a unique title.");
      return;
    }
  
    const newAlarm = { title, time };
    alarms.push(newAlarm);
  
    saveAlarmsToLocalStorage(alarms);

    loadAlarms();
  
    titleInput.value = "";
    timeInput.value = "";
  }
  
  function checkAndUpdateAlarms() {
    const alarms = getAlarmsFromLocalStorage();
    const now = new Date();
  
    alarms.forEach((alarm) => {
      const alarmTime = new Date(alarm.time);
      if (now > alarmTime && !alarm.triggered) {
        handleAlarmTrigger(alarm);
      }
    });
  }
  
  function handleAlarmTrigger(alarm) {

    const triggeredAlarmElement = document.getElementById("triggered-alarm");
    triggeredAlarmElement.textContent = `Alarm Triggered: ${alarm.title} - ${alarm.time}`;
    

    alarm.triggered = true;
    saveAlarmsToLocalStorage(getAlarmsFromLocalStorage());
  }
  
  function turnOffAlarm() {
    const turnOffButton = document.getElementById("turn-off-button");
    turnOffButton.style.display = "none";
  }
  
  function getAlarmsFromLocalStorage() {
    const storedAlarms = localStorage.getItem("alarms");
    return storedAlarms ? JSON.parse(storedAlarms) : [];
  }
  
  function saveAlarmsToLocalStorage(alarms) {
    localStorage.setItem("alarms", JSON.stringify(alarms));
  }
  // it isn`t the final version of the application, many functions doesn`t work
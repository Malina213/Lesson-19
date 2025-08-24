function padZero(num) {
  return num >= 10 ? num.toString() : '0' + num;
}

function timeOfDay(hours) {
  if (hours >= 0 && hours <= 6) return 'ночь';
  if (hours > 6 && hours <= 12) return 'утро';
  if (hours > 12 && hours <= 18) return 'день';
  if (hours > 18 && hours <= 23) return 'вечер';
  return 'неизвестно';
}

function two() {
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const now = new Date();
  const day = days[now.getDay()];
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const periodOfDay = timeOfDay(hours);
  const newYear = new Date('01 January 2026').getTime();
  const nowDate = now.getTime();
  const timeToNewYear = Math.floor((newYear - nowDate) / 1000 / 3600 / 24);

  return {
    day,
    hours: padZero(hours),
    minutes: padZero(minutes),
    seconds: padZero(seconds),
    periodOfDay,
    timeToNewYear
  };
}

function updateDisplay() {
  const {day, hours, minutes, seconds, periodOfDay,timeToNewYear} = two();
  document.getElementById('day').textContent = day;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
  document.getElementById('periodOfDay').textContent = periodOfDay;
  document.getElementById('timeToNewYear').textContent = timeToNewYear;
}

updateDisplay();
setInterval(updateDisplay, 1000);

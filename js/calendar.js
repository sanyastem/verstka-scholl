'use strict';
var calendarBody = document.querySelector('.calendar .calendar-body');
var dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function genCalendar(date) {
  var curDay = date.getDate();
  date.setDate(1);
  var startDay = date.getDay();
  var daysTotal = !(date.getFullYear() % 4) && date.getMonth() === 1 ? 29 : dayInMonth[date.getMonth()];
  var content = '';
  for(var i = 0; i < startDay; i++) {
    content += '<div class="no-day"></div>';
  }
  for(var i = 1; i <= daysTotal; i++) {
    if(i === curDay) {
      content += '<div class="cur-day">' + i + '</div>';
    } else {
      content += '<div>' + i + '</div>';
    }
  }
  calendarBody.innerHTML = content;
}
genCalendar(new Date());
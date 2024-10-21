"use strict";
function clock() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let hrs = document.getElementById('hours');
    let min = document.getElementById('minutes');
    let sec = document.getElementById('seconds');
    let period = document.getElementById('am-pm');
    let date = document.getElementById('ddmmyy');
    let day = document.getElementById('dd');
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    const ampm = h >= 12 ? "PM" : "AM";
    let d = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth() + 1;
    let yy = time.getFullYear();
    if (h > 12) {
        h -= 12;
    }
    if (h === 0) {
        h = 12;
    }
    hrs.innerHTML = h < 10 ? '0' + h : h.toString();
    min.innerHTML = m < 10 ? '0' + m : m.toString();
    sec.innerHTML = s < 10 ? '0' + s : s.toString();
    period.innerHTML = ampm;
    day.innerHTML = `${days[d]}`;
    date.innerHTML = `${dd}-${months[mm].substring(0, 3)}-${yy}`;
}
setInterval(clock, 1000);

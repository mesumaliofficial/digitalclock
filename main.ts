function clock(): void {

    let days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let hrs = document.getElementById('hours') as HTMLElement;
    let min = document.getElementById('minutes') as HTMLElement;
    let sec = document.getElementById('seconds') as HTMLElement;
    let period = document.getElementById('am-pm') as HTMLElement;
    let date: any = document.getElementById('ddmmyy') as HTMLElement;
    let day: any = document.getElementById('dd') as HTMLElement;

    const time: Date = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    const ampm: string = h >= 12 ? "PM" : "AM";

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
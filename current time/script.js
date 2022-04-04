window.onload= function showTime (){
    let date= new Date();
    let hour= date.getHours();
    let minute= date.getMinutes();
    let seconds= date.getSeconds();
    let session= "AM"
    if (hour==0) {
        hour=12;
    }
    if (hour>12) {
        hour = hour - 12;
        session= "PM"
    }
    if (hour < 10) {
        hour= "0" + hour
    } else {
        hour=hour
    }
    if (minute < 10) {
        minute="0" + minute
    } else {
        minute=minute
    }
    if (seconds < 10) {
        seconds= "0" + seconds
    } else {
        seconds=seconds
    }
    let time = hour+":"+ minute+":"+seconds;
    //document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000)
}
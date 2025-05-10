function showTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secunds = date.getSeconds();

    if (hours <10){
        hours = "0" + hours;
    }else {
        hours = hours;
    }

    if (minutes <10){
        minutes = "0" + minutes;
    }else{
        minutes = minutes;
    }

    if (secunds <10){
        secunds = "0" + secunds;
    }else{
        secunds = secunds;
    }

    let time = hours + ":" + minutes + ":" + secunds;
    document.getElementById('clock').innerText = time;
    setTimeout(showTime, 1000);
}

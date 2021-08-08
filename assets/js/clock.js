// time
function curentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,"0");
    const minut = String(now.getMinutes()).padStart(2,"0");
    const second = String(now.getSeconds()).padStart(2,"0");

    time.innerHTML = `${hours} : ${minut} : ${second}`

}
curentTime();
setInterval(curentTime, 1000);

// day
function curentDay() {
    const week = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
    const date = new Date();
    const year = String(date.getFullYear()).padStart(2,"0");
    const month = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    const todyWeek = week[date.getDay()];

    dayData.innerHTML = `${year}.${month}.${day} ${todyWeek}`

}
curentDay();
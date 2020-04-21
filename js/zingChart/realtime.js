let time_picker = document.querySelector('#time_picker');

let now = new Date();
let nowString = now.getDate() + "/" + ((now.getMonth() > 8) ? (now.getMonth() + 1) : ("0" + (now.getMonth() + 1))) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes();

let timeArray = [];
time_picker.innerHTML = nowString;

function setTimeArray() {
    let now = new Date();
    let time;
    for (i = 0; i < 24; i++) {
        time = now.getTime() - (i + 1) * 60 * 60 * 1000;
        let preHour = new Date(time);
        timeArray.push(preHour.getHours());
    }
}
setTimeArray();

function upToDate() {
    setInterval(() => {
        now = new Date();
        nowString = now.getDate() + "/" + ((now.getMonth() > 8) ? (now.getMonth() + 1) : ("0" + (now.getMonth() + 1))) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes();
        time_picker.innerHTML = nowString;
    }, 100);
    setInterval(() => {
        setTimeArray();
    }, 60000);
}
upToDate();
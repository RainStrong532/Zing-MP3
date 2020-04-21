let time_picker = document.querySelector('#time_picker');

let now = new Date();
let nowString = now.getDate() + "/" + ((now.getMonth() > 8) ? (now.getMonth() + 1) : ("0" + (now.getMonth() + 1))) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes();

time_picker.innerHTML = nowString;

function upToDate() {
    setInterval(() => {
        now = new Date();
        nowString = now.getDate() + "/" + ((now.getMonth() > 8) ? (now.getMonth() + 1) : ("0" + (now.getMonth() + 1))) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes();
        time_picker.innerHTML = nowString;
    }, 100)
}
upToDate();
const zing_handle = document.querySelector('.zing_mini_player .container .info_detail .song_info .song_playing .slide_handle');
let zing_contain = document.querySelector('.zing_mini_player .container .info_detail .song_info .song_playing');
let zing_fill = document.querySelector('.zing_mini_player .container .info_detail .song_info .song_playing .slide_fill');
const currentTime = document.querySelector('.zing_mini_player .container .info_detail .song_info .time_duration .current');
const durationTime = document.querySelector('.zing_mini_player .container .info_detail .song_info .time_duration .duration');
let audio = document.querySelector('.audio');
const play_st = document.querySelectorAll('.play_pause_btn');
let handle_pos = 0;
let width_slide = zing_contain.clientWidth;
let handle_md = false;
let intervalAudio;
let secondTime, minuteTime;
let play_pause = ['play_circle_outline', 'pause_circle_outline', 'play_arrow', 'pause'];
let isPlay = false,
    start = false;

play_st.forEach((item) => {
    item.addEventListener('click', (e) => {
        audioAction(e);
    })
})

zing_contain.addEventListener('mousedown', (e) => {
    if (!handle_md) {
        handle_pos = (e.offsetX * 100 / width_slide);
        zing_handle.style.left = handle_pos + '%'
        zing_fill.style.width = e.offsetX + 'px'
        if (audio.currentTime) {
            audio.currentTime = audio.duration * handle_pos / 100;
        }
    }
}, true)
zing_handle.addEventListener('mousedown', (e) => {
    handle_md = true;
})
zing_handle.addEventListener('mouseup', (e) => {
    handle_md = false;
})

function changeMusic(item) {
    audio.setAttribute('src', '..' + item.link);
    setTimeout(() => {
        convertTime(1);
        convertTime(2);
    }, 100)
}

function getMusic(id) {
    return musicItems[parseInt(id) - 1];
}

function updateAudioSlide() {
    if (intervalAudio) {
        clearInterval(intervalAudio);
    }

    intervalAudio = setInterval(() => {
        handle_pos = audio.currentTime * 100 / audio.duration;
        zing_fill.style.width = handle_pos + '%';
        zing_handle.style.left = handle_pos + '%';
        convertTime(1);
        currentTime.innerHTML = minuteTime + ':' + secondTime;
    }, 500)
}

function convertTime(num) {
    if (num === 1) {
        secondTime = Math.round(audio.currentTime % 60);
        secondTime = (secondTime > 9) ? secondTime : '0' + secondTime;
        minuteTime = Math.floor(audio.currentTime / 60);
        minuteTime = (minuteTime > 9) ? minuteTime : '0' + minuteTime;
        currentTime.innerHTML = minuteTime + ':' + secondTime;
    } else if (num === 2) {
        secondTime = Math.round(audio.duration % 60);
        secondTime = (secondTime > 9) ? secondTime : '0' + secondTime;
        minuteTime = Math.floor(audio.duration / 60);
        minuteTime = (minuteTime > 9) ? minuteTime : '0' + minuteTime;
        durationTime.innerHTML = minuteTime + ':' + secondTime;
    }
}

function audioInit(e) {
    audio.dataset.id = e.target.dataset.id;
    changeMusic(getMusic(audio.dataset.id));
    console.log(document.querySelector('.audio').duration);
    audio.play();
    audio.currentTime = 0;
    handle_pos = 0;
    zing_handle.style.left = handle_pos + '%'
    zing_fill.style.width = 0 + 'px'
    updateAudioSlide();
    start = true;
}

function audioAction(e) {
    let element = document.querySelector('.play_pause_btn[data-id="' + e.target.dataset.id + '"]')
    if (!start) {
        audioInit(e);
    } else {
        audio.play();
    }
    if (!isPlay) {
        isPlay = !isPlay;
        if (element.innerHTML.indexOf(play_pause[0]) !== -1) {
            element.innerHTML = play_pause[1];
        } else {
            element.innerHTML = play_pause[3];
        }

    } else {
        if (element.innerHTML.indexOf(play_pause[1]) !== -1) {
            element.innerHTML = play_pause[0];
        } else {
            element.innerHTML = play_pause[2];
        }
        audio.pause();
        isPlay = !isPlay;
    }
}
const input_range = document.querySelector('.zing_mini_player .container .info_detail .song_info .song_playing .range');
const currentTime = document.querySelector('.zing_mini_player .container .info_detail .song_info .time_duration .current');
const durationTime = document.querySelector('.zing_mini_player .container .info_detail .song_info .time_duration .duration');
const avatarSinger = document.querySelector('.zing_mini_player .container .info_detail .card_image img');
const singer_name = document.querySelector('.zing_mini_player .container .info_detail .song_info .song_info_detail .singer_name');
const song_name = document.querySelector('.zing_mini_player .container .info_detail .song_info .song_info_detail .song_name');
let audio = new Audio();
const play_st = document.querySelectorAll('.play_pause_btn');
const main_btn = document.querySelector('.play_status')
let handle_pos = 0;
let intervalAudio;
let secondTime, minuteTime;
let play_pause = ['play_circle_outline', 'pause_circle_outline', 'play_arrow', 'pause'];
let start = false;

play_st.forEach((item) => {
    item.addEventListener('click', (e) => {
        audioAction(e);
    })
})
main_btn.addEventListener('click', () => {
    changeText(document.querySelector('.play_pause_btn[data-id="' + audio.dataset.id + '"]'));
})
input_range.oninput = function(e) {
    handle_pos = e.target.value
    input_range.value = handle_pos;
    audio.currentTime = e.target.value / 100 * audio.duration;
    input_range.style.background = 'linear-gradient(90deg, #8a6fd6 ' + handle_pos + '%, #A0A0A0 ' + handle_pos + '%)'
    convertTime(1);
}

function changeMusic(item) {
    if (audio.dataset.id) {
        let prevItem = document.querySelector('.play_pause_btn[data-id="' + audio.dataset.id + '"]');
        prevItem.classList.remove('active');
        prevItem.parentNode.classList.remove('active');
        prevItem.start = false;
        if (prevItem.innerHTML.indexOf(play_pause[1]) !== -1) {
            prevItem.innerHTML = play_pause[0];
        } else {
            prevItem.innerHTML = play_pause[2];
        }
    }
    audio.setAttribute('src', '..' + item.link);
    audio.dataset.id = item.id;
    let nextItem = document.querySelector('.play_pause_btn[data-id="' + audio.dataset.id + '"]');
    nextItem.classList.add('active');
    nextItem.parentNode.classList.add('active');
    avatarSinger.setAttribute('src', '..' + item.imageLink);
    singer_name.innerHTML = item.singers.join(',');
    song_name.innerHTML = item.song;
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
        handle_pos = (audio.currentTime / audio.duration).toFixed(2);
        handle_pos = parseFloat(handle_pos) * 100;
        input_range.value = handle_pos;
        input_range.style.background = 'linear-gradient(90deg, #8a6fd6 ' + handle_pos + '%, #A0A0A0 ' + handle_pos + '%)'
        convertTime(1);
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
    changeMusic(getMusic(e.target.dataset.id));
    audio.play();
    if (e.target.innerHTML.indexOf(play_pause[0]) !== -1) {
        e.target.innerHTML = play_pause[1];
    } else {
        e.target.innerHTML = play_pause[3]
    }
    main_btn.innerHTML = play_pause[1];
    audio.currentTime = 0;
    handle_pos = 0;
    updateAudioSlide();
    e.target.start = true;
}

function audioAction(e) {
    document.querySelector('.zing_mini_player').style.display = 'block';
    document.querySelector('.inner_space_footer').style.display = 'block';
    document.querySelector('.beta_list').style.bottom = '80px'
    if (!e.target.start) {
        audioInit(e);
        e.target.start = true;
    } else {
        changeText(e.target);
    }
}

function changeText(element) {
    if (audio.paused) {
        audio.play();
        if (element.innerHTML.indexOf(play_pause[0]) !== -1) {
            element.innerHTML = play_pause[1]
        } else {
            element.innerHTML = play_pause[3]
        }
        main_btn.innerHTML = play_pause[1];
    } else {
        audio.pause();
        if (element.innerHTML.indexOf(play_pause[1]) !== -1) {
            element.innerHTML = play_pause[0]
        } else {
            element.innerHTML = play_pause[2]
        }
        main_btn.innerHTML = play_pause[0];
    }
}
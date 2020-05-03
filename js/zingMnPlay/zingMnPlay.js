const input_range = document.querySelector('.zing_mini_player .container .info_detail .song_info .song_playing .range');
const currentTime = document.querySelector('.zing_mini_player .container .info_detail .song_info .time_duration .current');
const durationTime = document.querySelector('.zing_mini_player .container .info_detail .song_info .time_duration .duration');
const avatarSinger = document.querySelector('.zing_mini_player .container .info_detail .card_image img');
const singer_name = document.querySelector('.zing_mini_player .container .info_detail .song_info .song_info_detail .singer_name');
const song_name = document.querySelector('.zing_mini_player .container .info_detail .song_info .song_info_detail .song_name');
const btnControl = document.querySelectorAll('.btn_ctn .material-icons');

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
        let listItems = document.querySelectorAll('.play_pause_btn[data-id="' + e.target.dataset.id + '"]')
        listItems.forEach(element => {
            audioAction(element);
        })
    })
})
main_btn.addEventListener('click', () => {
    changeText(document.querySelectorAll('.play_pause_btn[data-id="' + audio.dataset.id + '"]'));
})
input_range.oninput = function(e) {
    handle_pos = e.target.value
    input_range.value = handle_pos;
    audio.currentTime = e.target.value / 100 * audio.duration;
    input_range.style.background = 'linear-gradient(90deg, #8a6fd6 ' + handle_pos + '%, #A0A0A0 ' + handle_pos + '%)'
    convertTime(1);
}

function changeMusic(item) {
    document.querySelector('.zing_mini_player').style.display = 'block';
    document.querySelector('.inner_space_footer').style.display = 'block';
    document.querySelector('.beta_list').style.bottom = '80px'
    if (audio.dataset.id) {
        let prevItem = document.querySelectorAll('.play_pause_btn[data-id="' + audio.dataset.id + '"]');
        if (prevItem.length > 0) {
            prevItem.forEach(item => {
                item.classList.remove('active');
                item.parentNode.classList.remove('active');
                item.start = false;
                if (item.innerHTML.indexOf(play_pause[1]) !== -1) {
                    item.innerHTML = play_pause[0];
                } else {
                    item.innerHTML = play_pause[2];
                }
            })
        }
    }
    audio.setAttribute('src', '..' + item.link);
    audio.dataset.id = item.id;
    let nextItem = document.querySelectorAll('.play_pause_btn[data-id="' + audio.dataset.id + '"]');
    if (nextItem.length > 0) {
        nextItem.forEach(item => {
            item.classList.add('active');
            item.parentNode.classList.add('active');
        })
    }
    avatarSinger.setAttribute('src', '..' + item.imageLink);
    singer_name.innerHTML = '- ' + item.singers.join(',');
    song_name.innerHTML = item.song;
    setTimeout(() => {
        convertTime(1);
        convertTime(2);
    }, 100)
}

function getMusic(id) {
    return musicItems.find(item => {
        return item.id === id;
    });
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
        if (audio.currentTime === audio.duration) {
            setTimeout(() => {
                btnAction(btnControl[2]);
            }, 1000)
        }
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
    changeMusic(getMusic(e.dataset.id));
    audio.play();
    if (e.innerHTML.indexOf(play_pause[0]) !== -1) {
        e.innerHTML = play_pause[1];
    } else {
        e.innerHTML = play_pause[3]
    }
    main_btn.innerHTML = play_pause[1];
    audio.currentTime = 0;
    handle_pos = 0;
    updateAudioSlide();
    e.start = true;
}

function audioAction(e) {
    if (!e.start) {
        audioInit(e);
        e.start = true;
    } else {
        changeText(document.querySelectorAll('.play_pause_btn[data-id="' + e.dataset.id + '"]'));
    }
}

function changeText(element) {
    if (audio.paused) {
        audio.play();
        if (element.length > 0) {
            element.forEach(item => {
                if (item.innerHTML.indexOf(play_pause[0]) !== -1) {
                    item.innerHTML = play_pause[1]
                } else {
                    item.innerHTML = play_pause[3]
                }
            })
        }
        main_btn.innerHTML = play_pause[1];
    } else {
        audio.pause();
        if (element.length > 0) {
            element.forEach(item => {
                if (item.innerHTML.indexOf(play_pause[1]) !== -1) {
                    item.innerHTML = play_pause[0]
                } else {
                    item.innerHTML = play_pause[2]
                }
            })
        }
        main_btn.innerHTML = play_pause[0];
    }
}

btnControl.forEach(item => {
    item.addEventListener('click', btnAction);
})

function btnAction(e) {
    if (audio.dataset.id) {
        let id;
        if (e.target === btnControl[0] || e === btnControl[0]) {
            if (audio.dataset.id === '1') {
                id = musicItems.length;
            } else {
                id = parseInt(audio.dataset.id) - 1;
            }
        } else if (e.target === btnControl[1] || e === btnControl[1]) {
            if (audio.dataset.id === musicItems.length.toString()) {
                id = 1;
            } else {
                id = parseInt(audio.dataset.id) + 1;
            }
        } else if (e.target === btnControl[2] || e === btnControl[2]) {
            id = genarateId();
        }
        let elements = document.querySelectorAll('.play_pause_btn[data-id="' + id + '"]');
        if (elements.length > 0) {
            elements.forEach(item => {
                audioInit(item);
            })
        } else {
            changeMusic(getMusic(id.toString()));
            audio.play();
            main_btn.innerHTML = play_pause[1];
            audio.currentTime = 0;
            handle_pos = 0;
            updateAudioSlide();
        }
    }
}

function genarateId() {
    let id;
    do {
        id = Math.floor(Math.random() * (musicItems.length) + 1).toString();
    } while (id.indexOf(audio.dataset.id) !== -1)
    return id;
}
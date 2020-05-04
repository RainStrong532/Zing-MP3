const zingNewSongs = musicItems.slice(0, 15);
const zingNewSongsContainer = document.querySelector('#zing_new_songs');

const titlePlayList = ['Ca sĩ', 'ALBUM', 'Sáng tác', 'Thể loại'];
let optionMenu = [{ icon: 'favorite_border', title: 'Thêm vào thư viện' },
    { icon: 'library_add', title: 'Thêm vào danh sách phát' },
    { icon: 'redo', title: 'Phát tiếp theo' },
    { icon: 'add', title: 'Thêm vào playlist' },
    { icon: 'settings_input_antenna', title: 'Phát radio của bài hát' },
    { icon: 'mode_comment', title: 'Bình luận' },
    { icon: 'link', title: 'sao chép link' },
    { icon: 'note_add', title: 'Đóng góp lời bài hát' },
    { icon: 'block', title: 'Chặn' },
]
optionMenu = '<ul class="option_menu">' + optionMenu.map(item => {
    return '<li><a href="#" class="menu_link"><span class="material-icons">' + item.icon + '</span>' + item.title + '</a></li>'
}).join('') + '</ul>';

function renderZingNewSongs(container, items) {
    const dropDnMenu = renderDropMenu(items, 3);
    let list = items.map((item, index) => {
        const list_btn = '<div class="list_btn"><div class="btn"><span class="material-icons">mic</span></div><div class="btn"><span class="material-icons">more_horiz</span></div></div>';
        const card_info = '<div class="card_info"><div class="song_name">' + item.song + '</div><div class="singer_name">' + item.singers.join(",") + '</div></div>';
        const image = '<div class="image card-40"><img src="' + item.imageLink + '" alt="image"><span class="material-icons play_pause_btn" data-id="' + item.id + '">play_arrow</span></div>';
        const box_new_song = '<div class="box_new_song">' + image + card_info + list_btn + '</div>';
        return '<li>' + box_new_song + '<div class="dropdn_menu ' + ((index % 5 === 0) ? "top" : "") + '">' + dropDnMenu[index] + '</div></li>'
    })
    let columns = [];
    for (let i = 0; i < 3; i++) {
        let column = '<div class="column"><ul class="list">' + list.slice(i * 5, (i + 1) * 5).join("") + '</ul></div>';
        columns.push(column);
    }
    container.innerHTML = columns.join('');
}

function renderDropMenu(items, number) {
    let dropDnMenu = items.map((item, index) => {
        const drop_playList = titlePlayList.map(e => {
            return '<div class="text"><div class="title">' + e + ':</div><div class="info"><span>' + item.singers.join(",&nbsp;</span><span>") + '</span></div></div>'
        }).join('');
        return '<div class="dropdown_playlist ' + (((index % number) === (number - 1)) ? 'left' : 'right') + '"><div class="info_text">' + drop_playList + '</div></div>'
    })
    dropDnMenu = dropDnMenu.map((item, index) => {
        let image = '<div class="image card-40"><img src="' + items[index].imageLink + '" alt="image"></div><div class="card_info"><div class="song_name">' + items[index].song + '</div><div class="log_stats"><div class="viewed"><span class="material-icons">headset</span>' + (Math.random() * 100).toFixed(2) + 'M</div><div class="liked"><span class="material-icons">favorite_border</span>' + (Math.random() * 50).toFixed(2) + 'M</div></div></div>';
        return '<div class="song_info">' + item + image + '</div>' + optionMenu;
    })
    return dropDnMenu;
}
renderZingNewSongs(zingNewSongsContainer, zingNewSongs);
const MrSiro = musicItems.filter(item => {
    return item.singers[0].indexOf('Mr. Siro') !== -1;
}).slice(0, 10)

function renderMixZingChoice(container, items) {
    const image = '<div class="image card-170"><img src="' + items[9].imageLink + '" alt="image"><span class="material-icons">play_circle_outline</span></div>';
    const mix_intro = '<div class="mix_info"><div class="title">Những bài hát phải nghe của ' + items[0].singers[0] + '</div><div class="number_song">10 bài hát</div></div>'
    const intro = '<div class="intro">' + image + mix_intro + '</div>';
    const dropDnMenu = renderDropMenu(items, 2);
    let list = items.map((item, index) => {
        let order = '<div class="order"><span>' + (index + 1) + '.&nbsp;</span><span class="material-icons play_pause_btn" data-id="' + item.id + '">play_arrow</span></div>';
        const card_info = '<div class="card_info mix_zing"><div class="song_name">' + item.song + '</div></div>';
        const list_btn = '<div class="list_btn"><div class="btn"><span class="material-icons">mic</span></div><div class="btn"><span class="material-icons">more_horiz</span></div></div>';
        const box_new_song = '<div class="box_new_song">' + order + card_info + list_btn + '</div>';
        return '<li>' + box_new_song + '<div class="dropdn_menu ' + ((index % 5 === 0) ? "top" : "") + '">' + dropDnMenu[index] + '</div></li>'
    })

    let ul_list = [];
    for (let i = 0; i < 2; i++) {
        let column = '<ul class="list">' + list.slice(i * 5, (i + 1) * 5).join("") + '</ul>';
        ul_list.push(column);
    }
    container.innerHTML = intro + '<div class="mix_list">' + ul_list.join('') + '</div>';
}
renderMixZingChoice(document.querySelector('#mr_siro'), MrSiro);
renderMixZingChoice(document.querySelector('#le_bao_binh'), musicItems.filter(item => {
    return item.singers[0].indexOf('Lê Bảo Bình') !== -1;
}).slice(0, 10));
renderMixZingChoice(document.querySelector('#bich_phuong'), musicItems.filter(item => {
    return item.singers[0].indexOf('Bích Phương') !== -1;
}).slice(0, 10));
renderMixZingChoice(document.querySelector('#soobin_hoang_son'), musicItems.filter(item => {
    return item.singers[0].indexOf('Soobin Hoàng Sơn') !== -1;
}).slice(0, 10));
renderMixZingChoice(document.querySelector('#jack'), musicItems.filter(item => {
    return item.singers[0].indexOf('Jack') !== -1;
}).slice(0, 10));
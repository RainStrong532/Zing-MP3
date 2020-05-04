const VietNam = musicItems.filter(item => {
    return item.type === 'Việt Nam';
});
const US_UK = musicItems.filter(item => {
    return item.type === 'US-UK';
});
const hit_maker_series = { items: VietNam.slice(0, 15), title: 'Hit Maker Series' };
const hit_maker_series_container = document.querySelector('#hit_maker_series');
const lazy_trend = { items: US_UK.slice(0, 10), title: 'Lazy Trend' };
const lazy_trend_container = document.querySelector('#lazy_trend');
const hi_youth = { items: VietNam.slice(20, 30), title: 'Xin Chào thanh xuân' };
const hi_youth_container = document.querySelector('#hi_youth');
const top100 = { items: VietNam.slice(15, 20).concat(US_UK.slice(10, 15)), title: 'Top 100<span class="material-icons">arrow_forward_ios<span>' }
const top100_container = document.querySelector('#top_100');

function slideHandmade(container, item) {
    const headerHtml = '<div class="header_slider"><div class="title">' + item.title + '</div><div class="btn_controls"><a><span class="material-icons prev_btn">arrow_back_ios</span></a><a><span class="material-icons next_btn active">arrow_forward_ios</span></a></div></div>'
    let slideContainer = '<div class="hot_slider_container"><div class="slider_container slider_control" data-number="' + Math.round(item.items.length / 5) + '">'
    const slides = item.items.map(item => {
        return '<div class="slide"><a><div class="image card-190"><img src="' + item.imageLink + '" alt="image card"><span class="material-icons play_pause_btn" data-id="' + item.id + '">play_circle_outline</span></div></a><div class="card_info"><a class="song_name">' + item.song + '</a><a class="singer_name">' + item.singers.join(', ') + '</a></div></div>'
    }).join('');
    container.innerHTML = headerHtml + slideContainer + slides + '</div></div>';
}

slideHandmade(hit_maker_series_container, hit_maker_series);
slideHandmade(lazy_trend_container, lazy_trend);
slideHandmade(hi_youth_container, hi_youth);
slideHandmade(top100_container, top100);
slideHandmade(document.querySelector('#radio_highlights'), { items: VietNam.slice(45, 60), title: 'Radio nổi bật' });
slideHandmade(document.querySelector('#us_uk_music'), {
    items: musicItems.filter(item => {
        return item.type.indexOf('US-UK') !== -1;
    }).slice(0, 10),
    title: 'Nhạc Âu Mỹ'
});
slideHandmade(document.querySelector('#korean_music'), {
    items: musicItems.filter(item => {
        return item.type.indexOf('Korean') !== -1;
    }).slice(0, 5),
    title: 'Nhạc Hàn'
});
slideHandmade(document.querySelector('#chinese_music'), {
    items: musicItems.filter(item => {
        return item.type.indexOf('Chinese') !== -1;
    }).slice(0, 5),
    title: 'Nhạc Trung'
});
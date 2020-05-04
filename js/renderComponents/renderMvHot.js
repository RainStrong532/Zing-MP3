function renderMvHot(container, items, title) {
    const headerHtml = '<div class="header_slider"><div class="title">' + title + '</div><div class="btn_controls"><a><span class="material-icons prev_btn">arrow_back_ios</span></a><a><span class="material-icons next_btn active">arrow_forward_ios</span></a></div></div>'
    let slideContainer = '<div class="hot_slider_container"><div class="slider_container slider_control" data-number="' + Math.round(items.length / 10) + '">'
    let slideFirst = '<div class="slide slide_mvhot_first"><a><div class="image card-343-608"><img src="' + items[0].image + '" alt="image card"><span class="material-icons play_pause_btn" data-id="' + items[0].id + '">play_circle_outline</span>';
    let card_info = '<div class="card_info"><div class="song_name">' + items[0].song + '</div><div class="singer_name">' + items[0].singers.join(", ") + '</div></div></div></a></div>';
    slideFirst += card_info;

    const slides = [];
    slides.push(slideFirst);
    let slide = '';
    for (let i = 1; i < items.length; i++) {
        slide += '<a><div class="image card-190-107"><img src="' + items[i].image + '" alt="image card"><span class="material-icons play_pause_btn" data-id="' + items[i].id + '">play_circle_outline</span></div>';
        let card_info = '<div class="card_info"><div class="song_name">' + items[i].song + '</div><div class="singer_name">' + items[i].singers.join(", ") + '</div></div></a>';
        slide += card_info;
        if (i % 2 === 0) {
            slide = '<div class="slide slide_mvhot">' + slide + '</div>'
            slides.push(slide);
            slide = '';
        }
    }
    container.innerHTML = headerHtml + slideContainer + slides.join('') + '</div></div>';
}

renderMvHot(document.querySelector('#mv_hot'), musicItems.slice(50, 75), 'MV Hot');
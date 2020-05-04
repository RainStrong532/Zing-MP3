const itemsAlbumHot = musicItems.filter((item, index) => {
    return index % 10 === 9;
})
const itemsAlbumHotContainer = document.querySelector('#slide_album_hot');

function renderAlbumHot(container, items) {
    let slides = items.map(item => {
        let card_info = '<div class="card_info"><a class="song_name">' + item.song + '</a><a class="singer_name">' + item.singers.join(", ") + '</a></div>';
        return '<div class="slide"><a><div class="image card-190"><img src="' + item.imageLink + '" alt="image card"><span class="material-icons play_pause_btn" data-id="' + item.id + '">play_circle_outline</span></div></a>' + card_info + '</div>'
    })
    let albumSlides = []
    for (i = 0; i < (items.length / 5); i++) {
        let albumSlide = '<div class="album_slide">' + slides.slice(i * 5, (i + 1) * 5).join("") + '</div>';
        albumSlides.push(albumSlide);
    }
    container.innerHTML = albumSlides.join('') + albumSlides[0];
}
renderAlbumHot(itemsAlbumHotContainer, itemsAlbumHot);
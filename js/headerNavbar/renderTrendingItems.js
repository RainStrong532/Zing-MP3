let trendingItems = musicItems.slice(0, 5);

function renderTrending(items) {
    let html = items.map((item) => {
        return (
            "<li><a class='play_music' data-id='" + item.id + "'>" + item.song + "<span class='material-icons'>trending_up</span></a></li>"
        )
    }).join('');
    trending.innerHTML = html;
}
renderTrending(trendingItems);
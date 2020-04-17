let trendingItems = ["Em có ổn không", "Cứ ngỡ là anh", "Buồn lắm em ơi"];

function renderTrending(items) {
    let html = items.map((item) => {
        return (
            "<li><a>" + item + "<span class='material-icons'>trending_up</span></a></li>"
        )
    }).join('');
    trending.innerHTML = html;
}
renderTrending(trendingItems);
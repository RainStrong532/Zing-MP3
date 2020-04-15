let menubar = document.querySelector("#menu_bar");
let trending = document.querySelector("#trending");
let items = ["trang chủ", "#zingchart", "mới phát hành", "top 100", "chủ đề", "mv", "album", "nghệ sĩ", "nhạc cá nhân"];
let trendingItems = ["Em có ổn không", "Cứ ngỡ là anh", "Buồn lắm em ơi"];
let scrollTop = 0;

function renderMenubar(items) {
    let menubarHtml = items.map((item, key) => {
        return (
            (key > 4 && key < 8) ?
            "<li class='shrink'><a href='#' class='nav_link'>" + item + "</a></li>" :
            (key === 0) ?
            "<li class='shrink'><a href='#' class='nav_link active'>" + item + "</a></li>" :
            "<li><a href='#' class='nav_link'>" + item + "</a></li>"
        )
    });
    menubarHtml[menubarHtml.length] = "<li class='shrink'><a href='#' class='vip_btn'></a></li>";
    menubar.innerHTML = menubarHtml.join('');
}

function renderTrending(items) {
    let html = items.map((item) => {
        return (
            "<li><a>" + item + "<span class='material-icons'>trending_up</span></a></li>"
        )
    }).join('');
    trending.innerHTML = html;
}
renderMenubar(items);
renderTrending(trendingItems);
window.onscroll = () => {
    if (document.documentElement.scrollTop > scrollTop) {
        console.log("down");
        scrollTop = document.documentElement.scrollTop;
    } else {
        console.log("up");
        scrollTop = document.documentElement.scrollTop;
    }
}
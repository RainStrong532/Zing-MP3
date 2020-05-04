const menubar = document.querySelector("#menu_bar");
let menubar_items = ["trang chủ", "#zingchart", "mới phát hành", "top 100", "chủ đề", "mv", "album", "nghệ sĩ", "nhạc cá nhân"];

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
renderMenubar(menubar_items);
const menubar = document.querySelector("#menu_bar");
const trending = document.querySelector("#trending");
let items = ["trang chủ", "#zingchart", "mới phát hành", "top 100", "chủ đề", "mv", "album", "nghệ sĩ", "nhạc cá nhân"];
let trendingItems = ["Em có ổn không", "Cứ ngỡ là anh", "Buồn lắm em ơi"];
let scrollTop = 0;
const search_input = document.querySelector('#search_input');
const top_bar = document.querySelector('#top_bar');
let shrink_items = [];
const menubar_parent = document.querySelector(".menu_bar");
const input_box = document.querySelector('#input_box');
const user_profile = document.querySelector('.user_profile');
const header = document.querySelector('.header');

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
    shrink_items = document.querySelectorAll('header.header .top_bar .menu_bar .menu_bar_inner .shrink');
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

/* scroll efect*/
window.onscroll = () => {
    if (document.documentElement.scrollTop > scrollTop) {
        search_input.placeholder = "Tìm kiếm";
        top_bar.classList.add("top_bar_scroll");
        menubar_parent.classList.add('menubar_scroll');
        input_box.classList.add('input_scroll');
        if (shrink_items) {
            shrink_items.forEach((item, key) => {
                if (key === 0) {
                    item.style.transform = 'translateX(100%) scale(0)';
                    item.style.zIndex = -1;
                } else {
                    item.style.transform = 'translateX(-100%) scale(0)';
                    item.style.zIndex = -1;
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 100)
                }
            });
        }
        header.classList.add('header_scroll');
        user_profile.classList.add('scroll');
        scrollTop = document.documentElement.scrollTop;
    } else {
        search_input.placeholder = "Nhập tên bài hát, ca sĩ hoặc mv…";
        top_bar.classList.remove("top_bar_scroll");
        menubar_parent.classList.remove('menubar_scroll');
        input_box.classList.remove('input_scroll');
        if (shrink_items) {
            shrink_items.forEach(item => {
                item.style.transform = 'translateX(0) scale(1)';
                item.style.display = 'block';
            });
        }
        header.classList.remove('header_scroll');
        user_profile.classList.remove('scroll');
        scrollTop = document.documentElement.scrollTop;
    }
}
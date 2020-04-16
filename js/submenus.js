let zing_chart = document.querySelector('header.header .top_bar .menu_bar .menu_bar_inner> li:nth-child(2)');
let top_100 = document.querySelector('header.header .top_bar .menu_bar .menu_bar_inner> li:nth-child(4)');
let topic = document.querySelector('header.header .top_bar .menu_bar .menu_bar_inner> li:nth-child(5)');
let mvs = document.querySelector('header.header .top_bar .menu_bar .menu_bar_inner> li:nth-child(6)');
let albums = document.querySelector('header.header .top_bar .menu_bar .menu_bar_inner> li:nth-child(7)');
let singers = document.querySelector('header.header .top_bar .menu_bar .menu_bar_inner> li:nth-child(8)');

let items_zingChart = [
    ['realtime', 'Bài hát', 'MV'],
    ['tuần', 'Bài hát', 'MV'],
    ['us-uk', 'Bài hát', 'MV'],
    ['k-pop', 'Bài hát', 'MV'],
]
let top100_items = [
    ['Việt Nam', 'Nhạc Trẻ', 'Nhạc Trữ Tình', 'Quê Hương', 'Nhạc Cách Mạng', 'Rap / Hip Hop Việt', 'Rock Việt', 'Dance Việt'],
    ['ÂU MỸ', 'Pop', 'Rock', 'Rap / Hip Hop', 'Country', 'Electronic / Dance', 'R&B / Soul', 'Audiophile'],
    ['CHÂU Á', 'Hàn Quốc', 'Nhật Bản', 'Hoa Ngữ'],
    ['HÒA TẤU', 'Classical', 'Piano', 'Guitar', 'Violin', 'Cello', 'Saxophone', 'Nhạc Cụ Khác']
]
let topic_items = [
    ['ĐỀ XUẤT', 'Nhạc Hot', 'Những Bài Hit', 'Nhạc Việt Bất Hủ', 'Nhạc Bất Hủ Âu Mỹ', 'K-Pop HIT', 'Nhạc Thúy Nga'],
    ['THỂ LOẠI', 'EDM', 'Acoustic', 'Indie', 'Nhạc Không Lời', 'Trữ Tình & Bolero'],
    ['TÂM TRẠNG', 'Những Ngày Mưa', 'Tình Yêu', 'Giai Điệu Buồn', 'Âm Nhạc Thư Giãn', 'Motivation'],
    ['HOẠT ĐỘNG', 'Tập Trung', 'Spa - Yoga', 'Cà Phê', 'Weekend', 'Party', 'Du Lịch'],
]
let mvs_items = [
    ['VIỆT NAM', 'Nhạc Trẻ', 'Nhạc Trữ Tình', 'Dance Việt', 'Rock Việt', 'Rap / Hip Hop Việt', 'Nhạc Trịnh', 'Nhạc Thiếu Nhi'],
    ['ÂU MỸ', 'Pop', 'Rock', 'Rap / Hip Hop', 'Country', 'Electronic / Dance', 'R&B / Soul', 'Audiophile'],
    ['CHÂU Á', 'Hàn Quốc', 'Nhật Bản', 'Hoa Ngữ', 'Thais Lan'],
    ['HÒA TẤU', 'Classical', 'Piano', 'Guitar', 'Violin', 'Cello', 'Saxophone', 'Nhạc Cụ Dân Tộc']
]
let albums_items = mvs_items;
let singers_items = [
    ['Việt Nam', 'Âu Mỹ', 'Hàn Quốc', 'Nhật Bản', 'Hoa Ngữ', 'Hòa Tấu']
]

function renderZingchartSub(element, items) {
    let table;
    table = "<div>" + items.map(item => {
        return "<ul>" + item.map(item => {
            return "<li><a href='#'>" + item + "</a></li>"
        }).join('') + "</ul>";
    }).join('') + "</div>"
    element.innerHTML += table;
}
renderZingchartSub(zing_chart, items_zingChart);
renderZingchartSub(top_100, top100_items);
renderZingchartSub(topic, topic_items);
renderZingchartSub(mvs, mvs_items);
renderZingchartSub(albums, albums_items);
renderZingchartSub(singers, singers_items);
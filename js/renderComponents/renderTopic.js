const topicItems = [{
        title: 'Trữ Tình & Bolero',
        imageLink: 'images/singerImages/Trữ Tình & Bolero.jpg'
    },
    {
        title: 'Rock',
        imageLink: 'images/singerImages/Rock.jpg'
    },
    {
        title: 'EDM',
        imageLink: 'images/singerImages/EDM.jpg'
    },
    {
        title: 'Hòa Tấu',
        imageLink: 'images/singerImages/Hòa Tấu.jpg'
    },
    {
        title: 'Acoustic',
        imageLink: 'images/singerImages/Acoustic.jpg'
    },
    {
        title: 'Hip-Hop',
        imageLink: 'images/singerImages/Hip-Hop.jpg'
    },
    {
        title: 'R&B',
        imageLink: 'images/singerImages/R&B.jpg'
    },
    {
        title: 'Latin',
        imageLink: 'images/singerImages/Latin.jpg'
    },
    {
        title: 'Indie',
        imageLink: 'images/singerImages/Indie.jpg'
    },
    {
        title: 'Country',
        imageLink: 'images/singerImages/Country.jpg'
    },
    {
        title: 'Nhạc Dance',
        imageLink: 'images/singerImages/Nhạc Dance.jpg'
    },
    {
        title: 'Rap Việt',
        imageLink: 'images/singerImages/Rap Việt.jpg'
    },
    {
        title: 'Nhạc Thiếu Nhi',
        imageLink: 'images/singerImages/Nhạc Thiếu Nhi.jpg'
    },
    {
        title: 'Nhạc Trịnh',
        imageLink: 'images/singerImages/Nhạc Trịnh.jpg'
    },
    {
        title: 'Top DJs',
        imageLink: 'images/singerImages/Top DJs.jpg'
    }
]
const ActionEmotion = [{
        title: 'Workout',
        imageLink: 'images/singerImages/Workout.jpg'
    },
    {
        title: 'Spa & Yoga',
        imageLink: 'images/singerImages/Spa & Yoga.jpg'
    },
    {
        title: 'Tiệc Tùng',
        imageLink: 'images/singerImages/Tiệc Tùng.jpg'
    },
    {
        title: 'Chill',
        imageLink: 'images/singerImages/Chill.jpg'
    },
    {
        title: 'Khúc Nhạc Vui',
        imageLink: 'images/singerImages/Khúc Nhạc Vui.jpg'
    }
]

function renderTopic(container, items, title) {
    let headerHtml = '<div class="header_slider"><div class="title">' + title + '</div><div class="btn_controls"><a><span class="material-icons prev_btn">arrow_back_ios</span></a><a><span class="material-icons next_btn active">arrow_forward_ios</span></a></div></div>'

    let slideContainer = '<div class="hot_slider_container"><div class="slider_container slider_control" data-number="' + Math.round(items.length / 5) + '">'
    const slides = items.map(item => {
        return '<div class="slide slide_topic"><a><div class="image card-190-107"><img src="' + item.imageLink + '" alt="image card"><span class="topic">' + item.title + '</span></div></a></div>'
    }).join('');
    container.innerHTML = headerHtml + slideContainer + slides + '</div></div>';
}

renderTopic(document.querySelector('#topic_items'), topicItems, 'Thể Loại');
renderTopic(document.querySelector('#action_emotion'), ActionEmotion, 'Hoạt Động & Tâm Trạng');
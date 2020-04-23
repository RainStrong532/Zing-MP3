const chart_overlay = document.querySelector('.chart_container .overlay')
const highchart_line = document.querySelector('.chart_container .zingchart_highchart .line');
const time_chart = document.querySelector('.time_chart');
const diamond = document.querySelector('.chart_container .time_chart .diamond');
const time = document.querySelector('.chart_container .time_chart .time');
const tops = document.querySelectorAll('.chart_list .top');
let points = document.querySelectorAll('.chart_container .top_musics .points');
const paths = document.querySelectorAll('.chart_container .top_musics .paths');

chart_overlay.addEventListener('mouseout', () => {
    highchart_line.style.visibility = 'hidden';
    time_chart.style.visibility = 'hidden';
    diamond.style.visibility = 'hidden';
})
chart_overlay.addEventListener('mousemove', (e) => {
    const start = 20 + distancePoints / 2;
    const coordX = e.offsetX;
    const coordY = e.offsetY;
    let transX, transY;

    // horizontal
    let index = parseFloat(((coordX - start) / (distancePoints)).toFixed(2));
    index = Math.round(index);

    let timeHtml = (timeArray[index] > 9 && timeArray[index]) ? timeArray[index] : "0" + timeArray[index]
    time.innerHTML = timeHtml + ':00';
    if (index < 0 || index > 23) {
        highchart_line.style.visibility = 'hidden';
        time_chart.style.visibility = 'hidden';
        diamond.style.visibility = 'hidden';
        return;
    } else {
        highchart_line.style.visibility = 'visible';
        time_chart.style.visibility = 'visible';
        diamond.style.visibility = 'visible';
    }
    highchart_line.style.transform = 'translateX(' + (distancePoints * index) + 'px)';
    if (index === 0) {
        transX = '2px';
        diamond.style.left = 18 + distancePoints / 2 + 'px';
    } else if (index === 23) {
        transX = (distancePoints * (index + 0.5) - time_chart.clientWidth / 2 + 2) + 'px';
        diamond.style.left = time_chart.clientWidth - (20 + distancePoints / 2) + 'px';
    } else {
        transX = (distancePoints * (index + 0.5) - time_chart.clientWidth / 2 + 19) + 'px';
        diamond.style.left = '50%';
    }

    // vertical

    let heightY = chartHeight - coordY;
    let top_1 = top_songs[0][index] * chartHeight;
    let top_2 = top_songs[1][index] * chartHeight;
    let top_3 = top_songs[2][index] * chartHeight;

    //reset
    points.forEach((e) => {
        e.style.visibility = 'hidden';
    })
    tops.forEach((e) => {
            e.classList.remove('active');
        })
        // end reset
    if (heightY >= 0 && heightY < top_3 + (top_2 - top_3) / 2) {
        highchart_line.style.stroke = colorPath[2];
        time_chart.style.backgroundColor = colorPath[2];
        transY = chartHeight - top_3 - time_chart.clientHeight - 15 + 'px';
        points[2].style.visibility = 'visible';
        tops[2].classList.add('active');

    } else if (heightY > top_2 + (top_1 - top_2) / 2) {
        highchart_line.style.stroke = colorPath[0];
        time_chart.style.backgroundColor = colorPath[0];
        transY = chartHeight - top_1 - time_chart.clientHeight - 15 + 'px';
        points[0].style.visibility = 'visible';
        tops[0].classList.add('active');
    } else {
        highchart_line.style.stroke = colorPath[1];
        time_chart.style.backgroundColor = colorPath[1];
        transY = chartHeight - top_2 - time_chart.clientHeight - 15 + 'px';
        points[1].style.visibility = 'visible';
        tops[1].classList.add('active');
    }
    if (transY) {
        time_chart.style.transform = 'translate(' + transX + ', ' + transY + ')';
    }
})
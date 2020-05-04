const zingchartContainer = document.querySelector('.zingchart_container');
const zingchart_highchart = document.querySelector('.zingchart_highchart');
const realTimeFooter = document.querySelector('.realtime_footer');
let listTimeOdd = document.querySelectorAll('.realtime_footer span:nth-child(odd)');
let listTimeEven = document.querySelectorAll('.realtime_footer span:nth-child(even)');

const colorPath = ["rgb(74, 144, 226)", "rgb(80, 227, 194)", "rgb(227, 80, 80)"];
const fillPoint = "rgb(247, 247, 247)";
const strokeWidth = 2.2;
let top_songs = [
    [],
    [],
    []
]

function gennarate(arrays) {
    let a, b, c;

    c = (Math.random() * 0.15 + 0.05);
    c = parseFloat(c.toFixed(2));

    b = (Math.random() * ((1 - c) / 2 - c - 0.1) + c + 0.05);
    b = parseFloat(b.toFixed(2));

    a = 1 - b - c;
    a = parseFloat(a.toFixed(2));

    arrays[0].push(a);
    arrays[1].push(b);
    arrays[2].push(c);
}
for (let i = 0; i < 24; i++) {
    gennarate(top_songs);
}

let chartWidth = zingchartContainer.clientWidth;
let chartHeight = zingchartContainer.clientHeight;
chartHeight *= 0.9;

let distancePoints = (chartWidth - 40) / 24;

window.addEventListener('resize', () => {
    chartWidth = zingchartContainer.clientWidth;
    chartHeight = zingchartContainer.clientHeight;
    distancePoints = (chartWidth - 40) / 24;
    renderChart(top_songs);
    points = document.querySelectorAll('.chart_container .top_musics .points');
    renderRealtimeFooter();
})

function renderChart(top_songs) {
    let htmlPath = "";
    htmlPath = top_songs.map((top_song, index) => {
        let d = top_song.map((item, key) => {
            return (
                (key === 0) ?
                "M " + (distancePoints * (key + 0.5) + 20) + " " + (1 - item) * chartHeight :
                "L " + (distancePoints * (key + 0.5) + 20) + " " + (1 - item) * chartHeight
            )
        }).join(' ');
        let points = "<g class=\'points\'>" + top_song.map((item, key) => {
            return (
                "<circle cx=\'" + (distancePoints * (key + 0.5) + 20) + "\' cy=\'" + (1 - item) * chartHeight + "\'" + " r=\'" + strokeWidth * 1.2 + "\' stroke-width=\'" + strokeWidth + "\' stroke=\'" + colorPath[index] + "\' fill=\'rgb(247, 247, 247)\'/>"
            )
        }).join('') + "</g>";
        return '<g class="top_musics"><path class="paths" d=\"' + d + '\" stroke=\"' + colorPath[index] + '\" stroke-width=\"' + strokeWidth + '\" stroke-linejoin="round" stroke-linecap="round" fill="none"/>' + points + "</g>";
    }).join('')

    zingchartContainer.innerHTML = htmlPath;

    document.querySelectorAll('.chart_list .top .percent').forEach(
        (item, key) => {
            item.innerHTML = Math.round(top_songs[key][23] * 100) + "%";
        }
    )
}
zingchart_highchart.innerHTML = "<path class='line' d='M " + (20 + 1 + distancePoints / 2) + " 0 L" + (20 + 1 + distancePoints / 2) + " " + chartHeight + "\' stroke='rgb(74, 144, 226)' stroke-width='1' fill='none'/path>";


function renderRealtimeFooter() {
    let html = timeArray.reverse().map((item) => {
        return (
            (item > 9) ?
            '<span>' + item + '</span>' :
            '<span>0' + item + '</span>'
        )
    }).join('');
    realTimeFooter.innerHTML = html;
    realTimeFooter.style.padding = '0 ' + 20 + 'px';
    realTimeFooter.style.width = chartWidth + 'px';
    listTimeOdd = document.querySelectorAll('.realtime_footer span:nth-child(odd)');
    listTimeEven = document.querySelectorAll('.realtime_footer span:nth-child(even)');
    if (now.getHours() % 2 !== 0) {
        listTimeEven.forEach(item => {
            item.style.visibility = 'hidden';
        });
        listTimeOdd.forEach(item => {
            item.style.visibility = 'visible';
        });
    } else {
        listTimeEven.forEach(item => {
            item.style.visibility = 'visible';
        });
        listTimeOdd.forEach(item => {
            item.style.visibility = 'hidden';
        });
    }
}
renderRealtimeFooter();
renderChart(top_songs);
const volume_adjust = document.querySelector('.volume_adjust');
const volume_container = document.querySelector('.volume_container');
const volume_range = document.querySelector('.volume_range');

volume_adjust.addEventListener('mouseover', () => {
    volume_container.classList.add('active');
})
volume_adjust.addEventListener('mouseout', () => {
    volume_container.classList.remove('active');
})

volume_range.oninput = () => {
    audio.volume = volume_range.value / 100;
    console.log(audio.volume);
    volume_range.style.background = 'linear-gradient(90deg, #815fdd ' + volume_range.value + '%, #ddd ' + volume_range.value + '%)'
    if (audio.volume === 0.01) {
        document.querySelector('.volume_adjust .material-icons').innerHTML = 'volume_off';
    } else {
        document.querySelector('.volume_adjust .material-icons').innerHTML = 'volume_up';
    }
}
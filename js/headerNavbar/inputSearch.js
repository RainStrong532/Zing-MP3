search_input.addEventListener('keyup', (e) => {
    searchItems(e.target.value);
})

function searchItems(value) {
    let itemsFound = musicItems.filter(item => {
        return item.song.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    })
    renderTrending(itemsFound.slice(0, 5));
}
search_input.addEventListener('focus', (e) => {
    e.preventDefault();
    input_box.classList.add('active');
    menubar_parent.classList.add('active');
    user_profile.children[1].classList.add('active');
    trending.style.display = 'block';
})
window.addEventListener('click', (e) => {
    if (e.target !== search_input && e.target !== trending) {
        for (let i = 0; i < trending.children.length; i++) {
            if (e.target === trending.children[i].children[0] || e.target === trending.children[i]) {
                return;
            }
        }
        trending.style.display = 'none';
        input_box.classList.remove('active');
        menubar_parent.classList.remove('active');
        user_profile.children[1].classList.remove('active');
    }

})
document.querySelectorAll('.play_music').forEach(element => {
    element.addEventListener('click', (e) => {
        trending.style.display = 'none';
        let elements = document.querySelectorAll('.play_pause_btn[data-id="' + element.dataset.id + '"]');
        setTimeout(() => {
            if (elements.length > 0) {
                elements.forEach(item => {
                    audioInit(item);
                })
            } else {
                changeMusic(getMusic(element.dataset.id.toString()));
                audio.play();
                main_btn.innerHTML = play_pause[1];
                audio.currentTime = 0;
                handle_pos = 0;
                updateAudioSlide();
            }
        }, 100)
    })
})
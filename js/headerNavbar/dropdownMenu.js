let dropdown_menu = document.querySelector('#dropdown_menu');
let user_dropdown_menu = document.querySelector('.user_dropdown_menu');
let keyboard_arrow = document.querySelector('#keyboard_arrow_down');
let dropdown_cliked = true;

dropdown_menu.addEventListener('click', () => {
    if (dropdown_cliked) {
        user_dropdown_menu.style.display = 'block';
        keyboard_arrow.innerHTML = 'keyboard_arrow_up';
    } else {
        user_dropdown_menu.style.display = 'none';
        keyboard_arrow.innerHTML = 'keyboard_arrow_down';
    }
    dropdown_cliked = !dropdown_cliked
})
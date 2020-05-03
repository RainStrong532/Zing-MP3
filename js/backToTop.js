const back_to_top = document.querySelector('.back_to_top');

back_to_top.addEventListener('click', () => {
    console.log("A", window.scrollY);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
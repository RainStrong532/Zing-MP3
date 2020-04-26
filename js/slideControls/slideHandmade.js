let nextBtns = document.querySelectorAll('.next_btn');
let prevBtns = document.querySelectorAll('.prev_btn');
let sliderControls = document.querySelectorAll('.slider_control');

sliderControls.forEach((item) => {
    item.style.animation = 'none';
    item.style.width = parseInt(item.dataset.number) + '00%';
});

function sliderHandmade(slideContainer, num, next, prev) {
    let count = 0;
    next.addEventListener('click', () => {
        if (count >= 0 && count < num - 1) {
            count++;
            slideContainer.style.transition = 'all 0.5s';
            slideContainer.style.transform = 'translateX(' + (-(100 / num) * count) + '%)';
        }
    });
    prev.addEventListener('click', () => {
        if (count > 0 && count < num) {
            count--;
            slideContainer.style.transition = 'all 0.5s';
            slideContainer.style.transform = 'translateX(' + (-(100 / num) * count) + '%)';
        }
    })
    setInterval(() => {
        if (count >= 0 && count < num - 1) {
            next.classList.add('active');
        } else {
            next.classList.remove('active');
        }

        if (count > 0 && count < num) {
            prev.classList.add('active');
        } else {
            prev.classList.remove('active');
        }
    }, 100);
}

sliderControls.forEach((container, index) => {
    let number = parseInt(container.dataset.number);
    sliderHandmade(container, number, nextBtns[index], prevBtns[index]);
})
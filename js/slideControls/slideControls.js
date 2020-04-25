const slideControlAt = document.querySelector('.slide_control_auto');
const subAt = document.querySelectorAll('.slide_control_auto .album_slide');
const nextBtnAt = document.querySelector('.next_btn_auto');
const prevBtnAt = document.querySelector('.prev_btn_auto');

slideControlAt.style.width = subAt.length + '00%';

function sliderAuto(slideContainer, subs, next, prev) {
    let count = 1;
    let interval;
    next.addEventListener('click', () => {
        if (interval) {
            clearInterval(interval);
        }
        if (count >= subs.length - 1) {
            return;
        }
        if (count === 0) count++;
        slideContainer.style.transition = 'all 0.5s';
        slideContainer.style.transform = 'translateX(' + (-(100 / subs.length) * count) + '%)';
        count++;
        interval = setInterval(() => {;
            slideContainer.style.transition = 'all 0.5s';
            slideContainer.style.transform = 'translateX(' + (-(100 / subs.length) * count) + '%)';
            count++;
            if (count >= subs.length) {
                count = 1;
                setTimeout(() => {
                    slideContainer.style.transition = 'none';
                    slideContainer.style.transform = 'translateX(0%)';
                }, 500);
            }
        }, 4000);
    });
    prev.addEventListener('click', () => {
        if (interval) {
            clearInterval(interval);
        }
        if (count <= 1 || count === subs.length) return;
        count -= 2;
        slideContainer.style.transition = 'all 0.5s';
        slideContainer.style.transform = 'translateX(' + (-(100 / subs.length) * count) + '%)';
        count++;
        interval = setInterval(() => {;
            slideContainer.style.transition = 'all 0.5s';
            slideContainer.style.transform = 'translateX(' + (-(100 / subs.length) * count) + '%)';
            count++;
            if (count >= subs.length) {
                count = 1;
                setTimeout(() => {
                    slideContainer.style.transition = 'none';
                    slideContainer.style.transform = 'translateX(0%)';
                }, 500);
            }
        }, 4000);
    })
    setInterval(() => {
        if (count < subs.length - 1) {
            next.classList.add('active');
        } else {
            next.classList.remove('active');
        }

        if (count > 1 && count < subs.length) {
            prev.classList.add('active');
        } else {
            prev.classList.remove('active');
        }
    }, 100);
    interval = setInterval(() => {;
        slideContainer.style.transition = 'all 0.5s';
        slideContainer.style.transform = 'translateX(' + (-(100 / subs.length) * count) + '%)';
        count++;
        if (count >= subs.length) {
            count = 1;
            setTimeout(() => {
                slideContainer.style.transition = 'none';
                slideContainer.style.transform = 'translateX(0%)';
            }, 500);
        }
    }, 4000);
}
sliderAuto(slideControlAt, subAt, nextBtnAt, prevBtnAt);
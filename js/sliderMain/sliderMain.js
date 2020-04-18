const sliderContainer = document.querySelector('.container .slider_main .slider_container');
const sliderImages = document.querySelectorAll('.container .slider_main .slider_container .slide img');
const photoSlide = document.querySelectorAll('.container_slider .slider_main .slide_wrapper ul li img');
const photoSlideLi = document.querySelectorAll('.container_slider .slider_main .slide_wrapper ul li');
const slideWrapper = document.querySelector('.container_slider .slider_main .slide_wrapper');
const ulSlider = document.querySelector('.container_slider .slider_main .slide_wrapper ul');

let slideInterval;
let size = sliderImages[0].clientWidth;
let counter = 0;
window.addEventListener('resize', () => {
    size = sliderImages[0].clientWidth;
    sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
photoSlide.forEach((item, key) => {
    item.addEventListener('mouseover', () => {
        counter = key;
        photoSlide.forEach(item => {
            item.classList.remove('active');
        })
        photoSlide[key].classList.add('active');
        sliderContainer.style.transition = 'all 0.4s ease-in-out';
        sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    })
})
setInterval(() => {
    if (counter < sliderImages.length - 1) {
        sliderContainer.style.transition = 'all 0.4s ease-in-out';
        counter++;
        sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (counter === sliderImages.length - 1) {
        setTimeout(() => {
            sliderContainer.style.transition = 'none';
            counter = 0;
            sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }, 500)
    }
    photoSlide.forEach((item, key) => {
        item.classList.remove('active');
        if (key === counter) {
            item.classList.add('active');
        } else if (counter === sliderImages.length - 1) {
            photoSlide[0].classList.add('active');
        }
    })
}, 5000);

setTimeout(() => {
    photoSlideLi.forEach((item, key) => {
        setTimeout(() => {
            item.style.transform = 'translateY(150%)';
        }, 50 * key)
    });
    sliderContainer.addEventListener('mouseover', () => {
        photoSlideLi.forEach((item, key) => {
            setTimeout(() => {
                item.style.transform = 'translateY(0%)';
            }, 50 * key)
        });
    })
    ulSlider.addEventListener('mouseover', () => {
        photoSlideLi.forEach((item, key) => {
            setTimeout(() => {
                item.style.transform = 'translateY(0%)';
            }, 50 * key)
        });
    })
    sliderContainer.addEventListener('mouseout', () => {
        photoSlideLi.forEach((item, key) => {
            setTimeout(() => {
                item.style.transform = 'translateY(150%)';
            }, 50 * key)
        });
    })
    ulSlider.addEventListener('mouseout', () => {
        photoSlideLi.forEach((item, key) => {
            setTimeout(() => {
                item.style.transform = 'translateY(150%)';
            }, 50 * key)
        });
    })
}, 6000);
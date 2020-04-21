const faders = document.querySelectorAll('.header_fade_in');

const appearOptions = {
    threshold: 1
}

const appearOnScroll = new IntersectionObserver((entries,
        appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('header_appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})
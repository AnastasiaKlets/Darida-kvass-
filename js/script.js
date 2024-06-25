//для слайдера
if (document.querySelector('.offers_field') != null) {
    slider({
        containerSelector: '.offers_container',
        slideSelector: '.offers_slide',
        wrapperSelector: '.offers_wrapper',
        fieldSelector: '.offers_field',
        indicatorsClass: `offers_indicators`,
        duration: 6000,
        swipe: true,
    })
}
//для слайдера
if (document.querySelector('.offers_field') != null) {
    slider({
        containerSelector: '.offers_container',
        slideSelector: '.offers_slide',
        wrapperSelector: '.offers_wrapper',
        fieldSelector: '.offers_field',
        indicatorsClass: `offers_indicators`,
        duration: 6000,
        swipe: true,
    })
}
//анимации
(function () {
    let square = document.querySelector('.light_img');
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('square-animation');
            }
        });
    });
    let square2 = document.querySelector('.light_img_dark');
    let observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('square-animation2');
            }
        });
    });
    let square3 = document.querySelector('.backgraundButl');
    let observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('backgraundButl_animation');
            }
        });
    });
    let square4 = document.querySelector('.backgraundButl2');
    let observer4 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('backgraundButl_animation2');
            }
        });
    });
    let square5 = document.querySelector('.light_text');
    let observer5 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('light_text_anim');
            }
        });
    });
    let square6 = document.querySelector('.dark_text');
    let observer6 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('dark_text_anim');
            }
        });
    });
    observer.observe(square);
    observer2.observe(square2);
    observer3.observe(square3);
    observer4.observe(square4);
    observer5.observe(square5);
    observer6.observe(square6);
})();





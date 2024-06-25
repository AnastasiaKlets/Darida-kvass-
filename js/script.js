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






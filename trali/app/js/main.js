(function ($) {
    $(document).ready(function () {

        const swiper2 = new Swiper(".hero-section__img-slider", {
            slidesPerView: 1,
            freeMode: true,
            watchSlidesProgress: true,
            effect: 'fade'
        });
        const swiper = new Swiper(".hero-section__text-slider", {
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination:{
                el: '.swiper-pagination',
                clickable: true,
            },
            thumbs: {
                swiper: swiper2,
            },

        });

    })
})(jQuery);
$("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});

$(".overlay a").click(function () {
    $("#navToggle").toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked");
});
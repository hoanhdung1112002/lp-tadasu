jQuery(function($){
    $('.review-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        variableWidth:true,
        centerMode: true,
        cssEase: 'linear',
    });
});

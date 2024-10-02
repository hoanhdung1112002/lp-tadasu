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

    $('.faq-title').on("click", function () {
        var $content = $(this).closest(".faq-item").find(".faq-content");
        var $faqplus = $(this).closest(".faq-item").find(".faq-plus");
        $(".faq-plus").removeClass("faq-add");
        $(".faq-plus").removeClass("faq-remove");
        $(".item-content").slideUp("200");
        if ($content.is(":hidden")) {
        $faqplus.addClass("faq-add");
        $content.slideDown("200");
        } else {
        $content.slideUp("200");
        $faqplus.removeClass("faq-add");
        $faqplus.addClass("faq-remove");
        }
    });

    $(window).scroll(function() {
    
        var scroll_all_H = $(".card-list").innerHeight() * 3.31;
        var scroll_start = $(".card").offset().top;
        var scroll_center = $(window).height() / 2;
        $(".card").css({"height":scroll_all_H});
    
    
        var dami_space = $(".card-list").innerHeight() / 2;
    
    
        var scroll_center2 = scroll_center + 15;
        $("#slide_contena_up").css({"height":scroll_center2});
        $("#slide_contena_down").css({"height":scroll_center2});
    
        var action_side = Math.min($(window).scrollTop() - scroll_start + scroll_center, scroll_all_H);
        if(action_side < 0){
            action_side = 0;
        }
    
    
        var active_no = (action_side / scroll_all_H) * 3.0 + 0;
    
        if(active_no <= 0.8){
            $(".card-list").removeClass("active02");
            $(".card-list").removeClass("active03");
            $(".card-list").addClass("active01");
        }else if(active_no > 0.8 && active_no <= 2){
            $(".card-list").removeClass("active01");
            $(".card-list").removeClass("active03");
            $(".card-list").addClass("active02");
        }else if(active_no > 2){
            $(".card-list").removeClass("active01");
            $(".card-list").removeClass("active02");
            $(".card-list").addClass("active03");
        }
    
    
        ///////////////////////////////////////////////////////////////////
    
    
        var scrollPosition = $(window).scrollTop();
        var windH = $(window).height();
    
    
        $(".test").each(function(i) {
            var thisH = $(this).offset().top;
            if(thisH-windH*0.15 < scrollPosition){
                $(".test").addClass("active");
            }else{
                $(".test").removeClass("active");
            }
        });
    });    
});

jQuery(function ($) {
    $('.main-beauty-banner-con .banner-slide').each(function () {
        var $productSlide = $(this);
        $productSlide.slick({
            slide: 'div',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            infinite: true,
            speed: 1200,
            centerMode: true,
            dots: false,
            draggable: true,
            centerMode: false,
            centerPadding: '20px',
            prevArrow: '.main-product-controls .prev-btn',
            nextArrow: '.main-product-controls .next-btn',
        });
    });

    $('.detail-more-view-con .more-view-btn').click(function () {
        if (!$(this).parents('.product-detail-des-con').hasClass('active')) {
            $(this).parents('.product-detail-des-con').addClass('active');
            $(this).text('상품 정보 접기');
        } else {
            $(this).parents('.product-detail-des-con').removeClass('active');
            $(this).text('상품 정보 더보기');
        }
    });
    $('.expand-btn').click(function () {
        $(this).parents('.cm-reduce-con').find('.cm-reduce-list').addClass('expand');
    });

    $('.product-sort-con .filter').click(function () {
        if ($(this).hasClass('active')) {
            $(this).siblings('.filter-dropdown').hide();
            $(this).removeClass('active');
        } else {
            $(this).siblings('.filter-dropdown').show();
            $(this).addClass('active');
        }
    });

    /* POPUP OPEN */
    $('.loanPopupOpen').click(function () {
        if (!$('#loanPopup').hasClass('active')) {
            $('#loanPopup').addClass('active');
        }
    });
    /* POPUP CLOSE */
    $('#loanPopupClose').click(function () {
        $('#loanPopup').removeClass('active');
    });
    $('#loanPopup').on('click', function (e) {
        if ($(e.target).parent().hasClass('cm-modal-popup-fixed')) {
            $('#loanPopup').removeClass('active');
        }
    });

    /* 모바일 */
    $('.inter-select-con .more-view').click(function () {
        if (!$('.surgery-list-con').hasClass('remove')) {
            $('.surgery-list-con').addClass('remove');
            //$(".inter-select-con .more-view b").text("접기")
        }
        // else {
        //   $(".surgery-list-con").removeClass("active");
        //   $(".inter-select-con .more-view b").text("더보기")
        // }
    });
});

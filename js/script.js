jQuery(function ($) {
  $('.main-beauty-banner-con .banner-slide').each(function () {
    var $productSlide = $(this);
    $productSlide.slick({
      slide: 'div',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      speed: 1200,
      centerMode: false,
      dots: true,
      arrows: false,
      draggable: true,
      centerPadding: '0px',
      prevArrow: '.main-product-controls .prev-btn',
      nextArrow: '.main-product-controls .next-btn',
      cssEase: 'ease-in-out',
      adaptiveHeight: true,
      slidesMargin: 0,
      customPaging: function (slider, i) {
        // 숫자 대신 빈 문자열을 반환하여 점으로 표시
        return '<button type="button"></button>';
      },
    });
  });

  // Slick 슬라이더 초기화 후 스타일 적용
  setTimeout(function () {
    // 배너 이미지에 스타일 적용
    $('.rounded-banner-img').each(function () {
      $(this).css({
        'border-radius': '20px',
        overflow: 'hidden',
      });
    });

    // 슬라이더 컨테이너에도 스타일 적용
    $('.main-beauty-banner-con .slick-list').css({
      overflow: 'hidden',
    });

    $('.main-beauty-banner-con .slick-slide').css({
      'border-radius': '20px',
      overflow: 'hidden',
    });

    $('.main-beauty-banner-con .banner-item').css({
      'border-radius': '20px',
      overflow: 'hidden',
      padding: '0',
    });

    // 슬라이더 간 간격 제거
    $('.main-beauty-banner-con').css({
      overflow: 'hidden',
    });

    $('.banner-slide').css({
      overflow: 'hidden',
    });
  }, 100);

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
    $(this)
      .parents('.cm-reduce-con')
      .find('.cm-reduce-list')
      .addClass('expand');
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

// Function to set the active menu item based on the current page URL
document.addEventListener('DOMContentLoaded', function () {
  // Get the current page path
  const currentPage = window.location.pathname.split('/').pop();

  // Select all menu items
  const menuItems = document.querySelectorAll('#bottom-menu .menu-item');

  // Remove active class from all menu items
  menuItems.forEach(item => {
    item.classList.remove('active');
  });

  // Set active class based on current page
  if (currentPage === '' || currentPage === 'index.html') {
    // Home page
    document
      .querySelector('#bottom-menu .menu-item[href="./index.html"]')
      .classList.add('active');
  } else if (
    currentPage.includes('hospital') &&
    !currentPage.includes('hospitalDetail')
  ) {
    // Hospital page
    document
      .querySelector('#bottom-menu .menu-item[href="./hospital.html"]')
      .classList.add('active');
  } else if (currentPage.includes('loan')) {
    // Loan page
    document
      .querySelector('#bottom-menu .menu-item[href="./loan.html"]')
      .classList.add('active');
  } else if (currentPage.includes('notice')) {
    // Notice page
    document
      .querySelector('#bottom-menu .menu-item[href="./notice.html"]')
      .classList.add('active');
  } else if (currentPage.includes('mypage')) {
    // Mypage
    document
      .querySelector('#bottom-menu .menu-item[href="./mypage.html"]')
      .classList.add('active');
  } else if (currentPage.includes('hospitalDetail')) {
    // Consider hospital detail pages as part of hospital section
    document
      .querySelector('#bottom-menu .menu-item[href="./hospital.html"]')
      .classList.add('active');
  }
});

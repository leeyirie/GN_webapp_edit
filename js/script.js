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

// 페이지 로드 시 실행되는 함수
document.addEventListener('DOMContentLoaded', function () {
  // 현재 페이지 URL 가져오기
  const currentPage = window.location.pathname;

  // 하단 메뉴 아이템들 선택
  const menuItems = document.querySelectorAll('#bottom-menu .menu-item');

  // 기본적으로 모든 메뉴 아이템에서 active 클래스 제거
  menuItems.forEach(item => {
    item.classList.remove('active');
  });

  // 현재 페이지 URL에 따라 적절한 메뉴 아이템에 active 클래스 추가
  if (
    currentPage.includes('index.html') ||
    currentPage === '/' ||
    currentPage.endsWith('/')
  ) {
    // 홈 페이지
    document
      .querySelector('#bottom-menu a[href*="index.html"]')
      .classList.add('active');
  } else if (currentPage.includes('hospital.html')) {
    // 병원정보 페이지
    document
      .querySelector('#bottom-menu a[href*="hospital.html"]')
      .classList.add('active');
  } else if (currentPage.includes('mypage.html')) {
    // 마이페이지
    document
      .querySelector('#bottom-menu a[href*="mypage.html"]')
      .classList.add('active');
  } else if (currentPage.includes('loan.html')) {
    // 대출 페이지
    document
      .querySelector('#bottom-menu a[href*="loan.html"]')
      .classList.add('active');
  } else if (
    currentPage.includes('eyeSurgery.html') ||
    currentPage.includes('eventDetail.html')
  ) {
    // 눈수술 관련 페이지들은 홈으로 분류
    document
      .querySelector('#bottom-menu a[href*="index.html"]')
      .classList.add('active');
  }

  // 알림 메뉴는 특정 페이지가 없으므로 처리하지 않음
});

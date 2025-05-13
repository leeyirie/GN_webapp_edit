$(document).ready(function () {
  // 탭 전환 기능
  $('.tab-btn').click(function () {
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    const tabIndex = $(this).index();
    $('.tab-content').removeClass('active');
    $('.tab-content').eq(tabIndex).addClass('active');
  });

  // 이미지 호버 효과 및 애니메이션
  $('.event-detail-image img').hover(
    function () {
      $(this).css('transform', 'scale(1.03)');
    },
    function () {
      $(this).css('transform', 'scale(1)');
    }
  );

  // 리뷰 이미지 클릭 확대 효과
  $('.review-images img').click(function () {
    // 이미지 팝업 표시
  });

  // 좋아요 버튼 클릭 효과
  $('.btn-favorite').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).text('♥ 찜완료');
      $(this).css('background-color', '#fff0f8');
    } else {
      $(this).text('♡ 찜하기');
      $(this).css('background-color', 'white');
    }
  });

  // 모달 관련 기능은 modal.js에서 처리
});

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

// 리뷰 작성 폼 토글 기능
document.addEventListener('DOMContentLoaded', function () {
  const writeReviewBtn = document.getElementById('write-review-btn');
  const reviewFormContainer = document.getElementById('review-form-container');
  const cancelReviewBtn = document.getElementById('cancel-review-btn');
  const reviewForm = document.getElementById('review-form');
  const reviewImageInput = document.getElementById('review-image');
  const selectedFileName = document.querySelector('.selected-file-name');
  const reviewSummary = document.querySelector('.review-summary');
  const reviewList = document.querySelector('.review-list');
  const pagination = document.querySelector('.pagination');

  // 리뷰 작성 버튼 클릭 시 폼 표시
  if (writeReviewBtn) {
    writeReviewBtn.addEventListener('click', function () {
      // 리뷰 폼 표시
      reviewFormContainer.style.display = 'block';

      // 기존 리뷰 목록 및 요약 숨기기
      if (reviewSummary) reviewSummary.style.display = 'none';
      if (reviewList) reviewList.style.display = 'none';
      if (pagination) pagination.style.display = 'none';

      // 부드러운 스크롤로 폼 위치로 이동
      reviewFormContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  // 취소 버튼 클릭 시 폼 숨김
  if (cancelReviewBtn) {
    cancelReviewBtn.addEventListener('click', function () {
      // 리뷰 폼 숨기기
      reviewFormContainer.style.display = 'none';

      // 기존 리뷰 목록 및 요약 다시 표시
      if (reviewSummary) reviewSummary.style.display = 'flex';
      if (reviewList) reviewList.style.display = 'block';
      if (pagination) pagination.style.display = 'flex';

      // 폼 초기화
      reviewForm.reset();
      selectedFileName.textContent = '선택된 파일 없음';
    });
  }

  // 파일 선택 시 파일명 표시
  if (reviewImageInput) {
    reviewImageInput.addEventListener('change', function () {
      if (this.files && this.files[0]) {
        selectedFileName.textContent = this.files[0].name;
      } else {
        selectedFileName.textContent = '선택된 파일 없음';
      }
    });
  }

  // 리뷰 폼 제출 처리
  if (reviewForm) {
    reviewForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // 여기에 폼 데이터 전송 로직 추가 (서버 연동 시)
      // const formData = new FormData(reviewForm);

      // 임시 성공 메시지 (실제 구현 시 서버 응답에 따라 처리)
      alert('리뷰가 성공적으로 등록되었습니다.');

      // 리뷰 폼 숨기기
      reviewFormContainer.style.display = 'none';

      // 기존 리뷰 목록 및 요약 다시 표시
      if (reviewSummary) reviewSummary.style.display = 'flex';
      if (reviewList) reviewList.style.display = 'block';
      if (pagination) pagination.style.display = 'flex';

      // 폼 초기화
      reviewForm.reset();
      selectedFileName.textContent = '선택된 파일 없음';
    });
  }
});

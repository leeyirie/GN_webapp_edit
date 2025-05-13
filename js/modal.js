$(document).ready(function () {
  // 예약하기 버튼 클릭 시 모달 열기
  $('.btn-reserve').click(function () {
    $('#reservationModal').css('display', 'flex');
  });

  // 대출상담 버튼 클릭 시 모달 열기
  $('.btn-consult').click(function () {
    $('#loanModal').css('display', 'flex');
  });

  // 모달 닫기 버튼 클릭 시 모달 닫기
  $('.close-btn').click(function () {
    $(this).closest('.modal').css('display', 'none');
  });

  // 모달 외부 클릭 시 모달 닫기
  $(window).click(function (event) {
    if ($(event.target).hasClass('modal')) {
      $('.modal').css('display', 'none');
    }
  });

  // 예약 폼 제출
  $('#reservationForm').submit(function (e) {
    e.preventDefault();
    alert('예약이 접수되었습니다. 확인 후 연락드리겠습니다.');
    $('#reservationModal').css('display', 'none');
    this.reset();
  });

  // 대출 상담 폼 제출
  $('#loanForm').submit(function (e) {
    e.preventDefault();
    alert('대출 상담 신청이 접수되었습니다. 확인 후 연락드리겠습니다.');
    $('#loanModal').css('display', 'none');
    this.reset();
  });
});

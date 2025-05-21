$(document).ready(function () {
  // 정보수정 버튼 클릭 시 정보수정 섹션 표시하고 컨텐츠 영역 숨기기
  $('#editProfileBtn').click(function () {
    $('#profileEditSection').show();
    $('#mypageContent').hide();
  });

  // 뒤로가기 버튼 클릭 시 정보수정 섹션 숨기고 컨텐츠 영역 표시
  $('#backToProfileBtn').click(function () {
    $('#profileEditSection').hide();
    $('#mypageContent').show();
  });

  // 비밀번호 변경 버튼 클릭 시
  $('.change-btn').click(function () {
    alert('준비 중인 기능입니다.');
  });

  // 회원 탈퇴 버튼 클릭 시
  $('.withdraw-btn').click(function () {
    if (confirm('정말 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
      alert('탈퇴 처리되었습니다.');
      window.location.href = 'index.html';
    }
  });
});

$(document).ready(function () {
  // 아이디 찾기 버튼 클릭 시 - 로그인 폼 숨기고 아이디 찾기 섹션 표시
  $('#findIdBtn').click(function (e) {
    e.preventDefault();

    // 로그인 폼 숨기기
    $('.login-form-con').fadeOut(200, function () {
      // 아이디 찾기 섹션 보이기
      $('.id-recovery-con').fadeIn(200);

      // 폼 초기화 및 결과 영역 숨기기
      $('#findIdForm').show();
      $('.id-recovery-result').hide();
      $('#findIdForm')[0].reset();
    });

    // 상단 타이틀 변경
    $('.login-top-con h2').text('아이디 찾기');
  });

  // 비밀번호 찾기 버튼 클릭 시
  $('#findPwBtn').click(function (e) {
    e.preventDefault();

    // 로그인 폼 숨기기
    $('.login-form-con').fadeOut(200, function () {
      // 비밀번호 찾기 섹션 보이기
      $('.pw-recovery-con').fadeIn(200);

      // 폼 초기화 및 결과 영역 숨기기
      $('#findPwForm').show();
      $('.pw-recovery-result').hide();
      $('#findPwForm')[0].reset();
    });

    // 상단 타이틀 변경
    $('.login-top-con h2').text('비밀번호 찾기');
  });

  // 아이디 찾기 뒤로가기 버튼 클릭 시
  $('#idRecoveryBackBtn').click(function () {
    $('.id-recovery-con').fadeOut(200, function () {
      $('.login-form-con').fadeIn(200);
      $('.login-top-con h2').text('로그인');
    });
  });

  // 비밀번호 찾기 뒤로가기 버튼 클릭 시
  $('#pwRecoveryBackBtn').click(function () {
    $('.pw-recovery-con').fadeOut(200, function () {
      $('.login-form-con').fadeIn(200);
      $('.login-top-con h2').text('로그인');
    });
  });

  // 아이디 찾기 폼 제출
  $('#findIdForm').submit(function (e) {
    e.preventDefault();
    var name = $('#findIdName').val();
    var phone = $('#findIdPhone').val();

    // 폼 숨기고 결과 영역 표시
    $('#findIdForm').fadeOut(200, function () {
      $('.id-recovery-result').fadeIn(200);

      // 여기서 실제로는 서버에 요청을 보내 응답에 따라 사용자 아이디를 표시해야 함
      // 현재는 데모용으로 static한 결과를 보여줌
    });
  });

  // 비밀번호 찾기 폼 제출
  $('#findPwForm').submit(function (e) {
    e.preventDefault();
    var userId = $('#findPwId').val();
    var name = $('#findPwName').val();
    var phone = $('#findPwPhone').val();

    // 폼 숨기고 결과 영역 표시
    $('#findPwForm').fadeOut(200, function () {
      $('.pw-recovery-result').fadeIn(200);

      // 여기서 실제로는 서버에 요청을 보내 성공/실패 여부를 처리해야 함
      // 현재는 데모용으로 성공한 경우의 UI만 보여줌
    });
  });

  // 아이디 찾기 - 로그인 화면으로 버튼 클릭
  $('#backToLoginBtn').click(function () {
    $('.id-recovery-con').fadeOut(200, function () {
      $('.login-form-con').fadeIn(200);
      $('.login-top-con h2').text('로그인');

      // 폼 초기화 (딜레이 후 준비)
      setTimeout(function () {
        $('#findIdForm').show();
        $('.id-recovery-result').hide();
        $('#findIdForm')[0].reset();
      }, 300);
    });
  });

  // 비밀번호 찾기 - 로그인 화면으로 버튼 클릭
  $('#pwBackToLoginBtn').click(function () {
    $('.pw-recovery-con').fadeOut(200, function () {
      $('.login-form-con').fadeIn(200);
      $('.login-top-con h2').text('로그인');

      // 폼 초기화 (딜레이 후 준비)
      setTimeout(function () {
        $('#findPwForm').show();
        $('.pw-recovery-result').hide();
        $('#findPwForm')[0].reset();
      }, 300);
    });
  });

  // 테스트 버튼 - 아이디 찾기 결과 화면 보기
  $('#testIdResult').click(function () {
    $('.login-form-con').fadeOut(200, function () {
      $('.id-recovery-con').fadeIn(200);
      $('.login-top-con h2').text('아이디 찾기');

      // 폼 숨기고 결과 바로 표시
      $('#findIdForm').hide();
      $('.id-recovery-result').show();
    });
  });

  // 테스트 버튼 - 비밀번호 찾기 결과 화면 보기
  $('#testPwResult').click(function () {
    $('.login-form-con').fadeOut(200, function () {
      $('.pw-recovery-con').fadeIn(200);
      $('.login-top-con h2').text('비밀번호 찾기');

      // 폼 숨기고 결과 바로 표시
      $('#findPwForm').hide();
      $('.pw-recovery-result').show();
    });
  });
});

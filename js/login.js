$(document).ready(function () {
  // 로그인 폼 제출
  $('.login-form').submit(function (e) {
    e.preventDefault();
    var userId = $('#userId').val();
    var userPw = $('#userPw').val();

    // 폼 유효성 검사
    var isValid = true;

    if (!userId || userId.trim() === '') {
      shakeElement($('#userId'));
      isValid = false;
    }

    if (!userPw || userPw.trim() === '') {
      shakeElement($('#userPw'));
      isValid = false;
    }

    if (!isValid) return false;

    // 로딩 상태 표시
    var $button = $(this).find('button[type="submit"]');
    $button.find('.btn-text').fadeOut(100, function () {
      $button.find('.spinner').fadeIn(100);
    });

    // 테스트를 위해 지연 후 페이지 이동
    setTimeout(function () {
      window.location.href = './index.html';
    }, 1500);
  });

  // 아이디 찾기 버튼 클릭 시 - 로그인 폼 숨기고 아이디 찾기 섹션 표시
  $('#findIdBtn').click(function (e) {
    e.preventDefault();

    // 로그인 폼 숨기기
    $('.login-form-con').fadeOut(250, function () {
      // 아이디 찾기 섹션 보이기
      $('.id-recovery-con').fadeIn(300);

      // 폼 초기화 및 결과 영역 숨기기
      $('#findIdForm').show();
      $('.id-recovery-result').hide();
      $('#findIdForm')[0].reset();

      // 오류 메시지 초기화
      clearValidationMessages();
    });

    // 상단 타이틀 변경 (애니메이션 효과 추가)
    $('.login-top-con h2').fadeOut(150, function () {
      $(this).text('아이디 찾기').fadeIn(150);
    });
  });

  // 비밀번호 찾기 버튼 클릭 시
  $('#findPwBtn').click(function (e) {
    e.preventDefault();

    // 로그인 폼 숨기기
    $('.login-form-con').fadeOut(250, function () {
      // 비밀번호 찾기 섹션 보이기
      $('.pw-recovery-con').fadeIn(300);

      // 폼 초기화 및 결과 영역 숨기기
      $('#findPwForm').show();
      $('.pw-recovery-result').hide();
      $('#findPwForm')[0].reset();

      // 오류 메시지 초기화
      clearValidationMessages();
    });

    // 상단 타이틀 변경 (애니메이션 효과 추가)
    $('.login-top-con h2').fadeOut(150, function () {
      $(this).text('비밀번호 찾기').fadeIn(150);
    });
  });

  // 아이디 찾기 뒤로가기 버튼 클릭 시
  $('#idRecoveryBackBtn').click(function () {
    $('.id-recovery-con').fadeOut(250, function () {
      $('.login-form-con').fadeIn(300);

      // 타이틀 변경 (애니메이션 효과 추가)
      $('.login-top-con h2').fadeOut(150, function () {
        $(this).text('로그인').fadeIn(150);
      });
    });
  });

  // 비밀번호 찾기 뒤로가기 버튼 클릭 시
  $('#pwRecoveryBackBtn').click(function () {
    $('.pw-recovery-con').fadeOut(250, function () {
      $('.login-form-con').fadeIn(300);

      // 타이틀 변경 (애니메이션 효과 추가)
      $('.login-top-con h2').fadeOut(150, function () {
        $(this).text('로그인').fadeIn(150);
      });
    });
  });

  // 아이디 찾기 폼 제출
  $('#findIdForm').submit(function (e) {
    e.preventDefault();
    var name = $('#findIdName').val();
    var phone = $('#findIdPhone').val();

    // 오류 메시지 초기화
    clearValidationMessages();

    // 유효성 검사
    var isValid = true;

    if (!name || name.trim() === '') {
      $('#findIdNameError').text('이름을 입력해 주세요.');
      shakeElement($('#findIdName'));
      isValid = false;
    }

    if (!phone || phone.trim() === '') {
      $('#findIdPhoneError').text('휴대폰 번호를 입력해 주세요.');
      shakeElement($('#findIdPhone'));
      isValid = false;
    } else if (!isValidPhone(phone)) {
      $('#findIdPhoneError').text('올바른 휴대폰 번호 형식이 아닙니다.');
      shakeElement($('#findIdPhone'));
      isValid = false;
    }

    if (!isValid) return false;

    // 로딩 상태 표시
    var $button = $(this).find('button[type="submit"]');
    $button.find('.btn-text').fadeOut(100, function () {
      $button.find('.spinner').fadeIn(100);
    });

    // 폼 숨기고 결과 영역 표시 (더 자연스러운 전환으로 개선)
    // 실제로는 여기서 서버 요청해야함
    setTimeout(function () {
      $('#findIdForm').fadeOut(250, function () {
        // 로딩 상태 해제 (실제 구현에서는 응답 처리 후 실행)
        $button.find('.spinner').hide();
        $button.find('.btn-text').show();

        $('.id-recovery-result').fadeIn(300);
      });
    }, 1000); // 테스트용 지연 - 실제로는 서버 응답에 따라 처리
  });

  // 비밀번호 찾기 폼 제출
  $('#findPwForm').submit(function (e) {
    e.preventDefault();
    var userId = $('#findPwId').val();
    var name = $('#findPwName').val();
    var phone = $('#findPwPhone').val();

    // 오류 메시지 초기화
    clearValidationMessages();

    // 유효성 검사
    var isValid = true;

    if (!userId || userId.trim() === '') {
      $('#findPwIdError').text('아이디를 입력해 주세요.');
      shakeElement($('#findPwId'));
      isValid = false;
    }

    if (!name || name.trim() === '') {
      $('#findPwNameError').text('이름을 입력해 주세요.');
      shakeElement($('#findPwName'));
      isValid = false;
    }

    if (!phone || phone.trim() === '') {
      $('#findPwPhoneError').text('휴대폰 번호를 입력해 주세요.');
      shakeElement($('#findPwPhone'));
      isValid = false;
    } else if (!isValidPhone(phone)) {
      $('#findPwPhoneError').text('올바른 휴대폰 번호 형식이 아닙니다.');
      shakeElement($('#findPwPhone'));
      isValid = false;
    }

    if (!isValid) return false;

    // 로딩 상태 표시
    var $button = $(this).find('button[type="submit"]');
    $button.find('.btn-text').fadeOut(100, function () {
      $button.find('.spinner').fadeIn(100);
    });

    // 폼 숨기고 결과 영역 표시 (더 자연스러운 전환으로 개선)
    // 실제로는 여기서 서버 요청
    setTimeout(function () {
      $('#findPwForm').fadeOut(250, function () {
        // 로딩 상태 해제 (실제 구현에서는 응답 처리 후 실행)
        $button.find('.spinner').hide();
        $button.find('.btn-text').show();

        $('.pw-recovery-result').fadeIn(300);
      });
    }, 1000); // 테스트용 지연 - 실제로는 서버 응답에 따라 처리
  });

  // 아이디 찾기 - 로그인 화면으로 버튼 클릭
  $('#backToLoginBtn').click(function () {
    $('.id-recovery-con').fadeOut(250, function () {
      $('.login-form-con').fadeIn(300);

      // 타이틀 변경 (애니메이션 효과 추가)
      $('.login-top-con h2').fadeOut(150, function () {
        $(this).text('로그인').fadeIn(150);
      });

      // 폼 초기화 (딜레이 후 준비)
      setTimeout(function () {
        $('#findIdForm').show();
        $('.id-recovery-result').hide();
        $('#findIdForm')[0].reset();
        clearValidationMessages();
      }, 300);
    });
  });

  // 비밀번호 찾기 - 로그인 화면으로 버튼 클릭
  $('#pwBackToLoginBtn').click(function () {
    $('.pw-recovery-con').fadeOut(250, function () {
      $('.login-form-con').fadeIn(300);

      // 타이틀 변경 (애니메이션 효과 추가)
      $('.login-top-con h2').fadeOut(150, function () {
        $(this).text('로그인').fadeIn(150);
      });

      // 폼 초기화 (딜레이 후 준비)
      setTimeout(function () {
        $('#findPwForm').show();
        $('.pw-recovery-result').hide();
        $('#findPwForm')[0].reset();
        clearValidationMessages();
      }, 300);
    });
  });

  // 테스트 버튼 - 아이디 찾기 결과 화면 보기
  $('#testIdResult').click(function () {
    $('.login-form-con').fadeOut(250, function () {
      $('.id-recovery-con').fadeIn(300);

      // 타이틀 변경 (애니메이션 효과 추가)
      $('.login-top-con h2').fadeOut(150, function () {
        $(this).text('아이디 찾기').fadeIn(150);
      });

      // 폼 숨기고 결과 바로 표시
      $('#findIdForm').hide();
      $('.id-recovery-result').show();
    });
  });

  // 테스트 버튼 - 비밀번호 찾기 결과 화면 보기
  $('#testPwResult').click(function () {
    $('.login-form-con').fadeOut(250, function () {
      $('.pw-recovery-con').fadeIn(300);

      // 타이틀 변경 (애니메이션 효과 추가)
      $('.login-top-con h2').fadeOut(150, function () {
        $(this).text('비밀번호 찾기').fadeIn(150);
      });

      // 폼 숨기고 결과 바로 표시
      $('#findPwForm').hide();
      $('.pw-recovery-result').show();
    });
  });

  // 유효성 검사 메시지 초기화 함수
  function clearValidationMessages() {
    $('.validation-message').text('');
  }

  // 유효성 검사 도우미 함수
  function isValidPhone(phone) {
    var phoneRegex = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
    return phoneRegex.test(phone);
  }

  // 인풋 요소 흔들어서 오류 표시 함수
  function shakeElement($element) {
    $element.css('border-color', '#ff3860');
    $element
      .animate({ marginLeft: '-=10px' }, 100)
      .animate({ marginLeft: '+=20px' }, 100)
      .animate({ marginLeft: '-=20px' }, 100)
      .animate({ marginLeft: '+=10px' }, 100, function () {
        setTimeout(function () {
          $element.css('border-color', '#ddd');
        }, 2000);
      });
  }

  // 인풋 필드 포커스 및 블러 이벤트 처리
  $('#findIdName, #findIdPhone, #findPwId, #findPwName, #findPwPhone').focus(
    function () {
      $(this).parent().find('.validation-message').text('');
    }
  );
});

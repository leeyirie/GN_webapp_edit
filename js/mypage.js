$(document).ready(function () {
  // 초기 상태에서는 모든 섹션 숨기기
  $('.content-section').hide();

  // 네비게이션 클릭 처리
  $('.nav-item').on('click', function (e) {
    e.preventDefault();
    const section = $(this).data('section');

    // 현재 활성화된 섹션인지 확인
    const isActive = $(this).hasClass('active');

    // 모든 섹션 닫기
    $('.nav-item').removeClass('active');
    $('.content-section').slideUp();
    $('.nav-item i')
      .removeClass('fa-chevron-down')
      .addClass('fa-chevron-right');

    // 클릭한 섹션이 이미 활성화되어 있지 않은 경우에만 열기
    if (!isActive) {
      $(this).addClass('active');
      $(`#${section}`).slideDown();
      $(this)
        .find('i')
        .removeClass('fa-chevron-right')
        .addClass('fa-chevron-down');
    }
  });

  // 프로필 수정 버튼
  $('.edit-profile-btn').on('click', function () {
    window.location.href = './profile-edit.html';
  });

  // 포인트 상세 클릭
  $('.point-value').on('click', function () {
    window.location.href = './mypage-point.html';
  });

  // 대출 상세 클릭
  $('.loan-summary').on('click', function () {
    window.location.href = './mypage-loan.html';
  });

  // 찜 목록 클릭
  $('.wishlist-item').on('click', function () {
    const hospitalId = $(this).data('hospital-id');
    window.location.href = `./hospital-detail.html?id=${hospitalId}`;
  });

  // 예약 내역 클릭
  $('.appointment-item').on('click', function () {
    const appointmentId = $(this).data('appointment-id');
    window.location.href = `./appointment-detail.html?id=${appointmentId}`;
  });

  // 햄버거 메뉴 토글
  $('.menu-trigger').on('click', function () {
    $(this).toggleClass('active');
    $('.dropdown-menu').toggleClass('active');
  });

  // Add hover effects for interactive elements
  $(
    '.nav-item, .point-value, .loan-summary, .wishlist-item, .appointment-item'
  ).hover(
    function () {
      $(this).css('transform', 'translateX(5px)');
    },
    function () {
      $(this).css('transform', 'translateX(0)');
    }
  );

  // 프로필 이미지 변경
  $('.edit-image-btn').on('click', function () {
    // 파일 선택 다이얼로그 트리거
    const input = $(
      '<input type="file" accept="image/*" style="display: none">'
    );
    input.click();

    input.on('change', function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          $('.profile-image img').attr('src', e.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
  });

  // 프로필 정보 저장
  $('.save-btn').on('click', function () {
    // 여기에 프로필 정보 저장 로직 구현
    alert('프로필 정보가 저장되었습니다.');
  });

  // 프로필 정보 초기화
  $('.reset-btn').on('click', function () {
    if (confirm('변경사항을 취소하시겠습니까?')) {
      // 폼 초기화 로직
      $('.profile-form input').each(function () {
        $(this).val($(this).attr('value'));
      });
      $('.profile-form select').each(function () {
        $(this).val($(this).find('option:first').val());
      });
    }
  });

  // 예약 내역 필터
  $('.reservation-filters .filter-btn').on('click', function () {
    const filter = $(this).data('filter');
    $(this).addClass('active').siblings().removeClass('active');

    // 여기에 필터링 로직 구현
    filterReservations(filter);
  });

  // 상담 내역 필터
  $('.consultation-filters .filter-btn').on('click', function () {
    const filter = $(this).data('filter');
    $(this).addClass('active').siblings().removeClass('active');

    // 여기에 필터링 로직 구현
    filterConsultations(filter);
  });

  // 예약 변경
  $('.modify-btn').on('click', function () {
    const reservationItem = $(this).closest('.reservation-item');
    const hospitalName = reservationItem.find('h3').text();
    const procedure = reservationItem.find('.procedure').text();

    // 여기에 예약 변경 로직 구현
    alert(`${hospitalName}의 ${procedure} 예약을 변경합니다.`);
  });

  // 예약 취소
  $('.cancel-btn').on('click', function () {
    const reservationItem = $(this).closest('.reservation-item');
    const hospitalName = reservationItem.find('h3').text();

    if (confirm(`${hospitalName}의 예약을 취소하시겠습니까?`)) {
      // 여기에 예약 취소 로직 구현
      reservationItem.fadeOut();
    }
  });

  // 찜하기 취소
  $('.remove-wish').on('click', function (e) {
    e.preventDefault();
    const wishlistItem = $(this).closest('.wishlist-item');
    const hospitalName = wishlistItem.find('h3').text();

    if (confirm(`${hospitalName}을(를) 찜 목록에서 삭제하시겠습니까?`)) {
      // 여기에 찜하기 취소 로직 구현
      wishlistItem.fadeOut();
    }
  });

  // 상세보기 버튼
  $('.view-detail').on('click', function () {
    const item = $(this).closest('.wishlist-item, .consultation-item');
    const title = item.find('h3').text();

    // 여기에 상세보기 로직 구현
    window.location.href = `detail.html?title=${encodeURIComponent(title)}`;
  });
});

// 예약 내역 필터링 함수
function filterReservations(filter) {
  const items = $('.reservation-item');

  items.show();
  if (filter === 'upcoming') {
    items.not(':has(.status.upcoming)').hide();
  } else if (filter === 'past') {
    items.not(':has(.status.completed)').hide();
  }
}

// 상담 내역 필터링 함수
function filterConsultations(filter) {
  const items = $('.consultation-item');

  items.show();
  if (filter === 'progress') {
    items.not(':has(.status.progress)').hide();
  } else if (filter === 'complete') {
    items.not(':has(.status.complete)').hide();
  }
}

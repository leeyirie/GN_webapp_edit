$(document).ready(function () {
  // 초기 상태에서 컨텐츠 숨기기
  $('.point-summary-card, .point-history-section').hide();

  // 페이지 로드 후 컨텐츠 표시 애니메이션
  setTimeout(function () {
    $('.point-summary-card, .point-history-section').addClass('active');
  }, 100);

  // 기간 필터 처리
  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    const period = $(this).data('period');
    filterHistory(period);
  });

  // 페이지네이션 처리
  $('.page-number').on('click', function () {
    $('.page-number').removeClass('active');
    $(this).addClass('active');

    const page = $(this).text();
    loadHistoryPage(page);
  });

  $('.page-btn').on('click', function () {
    if ($(this).hasClass('prev')) {
      // 이전 페이지 로드
      const currentPage = parseInt($('.page-number.active').text());
      if (currentPage > 1) {
        loadHistoryPage(currentPage - 1);
      }
    } else {
      // 다음 페이지 로드
      const currentPage = parseInt($('.page-number.active').text());
      const maxPage = 10; // 전체 페이지 수
      if (currentPage < maxPage) {
        loadHistoryPage(currentPage + 1);
      }
    }
  });

  // 기간별 필터링 함수
  function filterHistory(period) {
    // 여기에 실제 API 호출 및 데이터 필터링 로직 구현
    console.log('Filtering by period:', period);

    // 예시 데이터로 테이블 업데이트
    const mockData = {
      all: [
        {
          date: '2025.07.15',
          description: '후기 작성 적립',
          expiry: '2026.07.14',
          amount: '+500 P',
        },
        {
          date: '2025.05.10',
          description: '상담 예약 적립',
          expiry: '2026.05.09',
          amount: '+300 P',
        },
      ],
      '3m': [
        {
          date: '2025.07.15',
          description: '후기 작성 적립',
          expiry: '2026.07.14',
          amount: '+500 P',
        },
      ],
      '6m': [
        {
          date: '2025.07.15',
          description: '후기 작성 적립',
          expiry: '2026.07.14',
          amount: '+500 P',
        },
        {
          date: '2025.05.10',
          description: '상담 예약 적립',
          expiry: '2026.05.09',
          amount: '+300 P',
        },
      ],
    };

    updateTable(mockData[period]);
  }

  // 페이지 로드 함수
  function loadHistoryPage(page) {
    // 페이지네이션 UI 업데이트
    $('.page-number').removeClass('active');
    $(`.page-number:contains('${page}')`).addClass('active');

    // 이전/다음 버튼 상태 업데이트
    $('.page-btn.prev').prop('disabled', page <= 1);
    $('.page-btn.next').prop('disabled', page >= 10);

    // 여기에 실제 API 호출 및 데이터 로드 로직 구현
    console.log('Loading page:', page);
  }

  // 테이블 업데이트 함수
  function updateTable(data) {
    const tableBody = $('.table-body');
    tableBody.empty();

    data.forEach(item => {
      const row = `
                <div class="history-row">
                    <div class="col date">${item.date}</div>
                    <div class="col description">${item.description}</div>
                    <div class="col expiry">${item.expiry}</div>
                    <div class="col amount plus">${item.amount}</div>
                </div>
            `;
      tableBody.append(row);
    });
  }

  // 햄버거 메뉴 토글
  $('.menu-trigger').on('click', function () {
    $(this).toggleClass('active');
    $('.dropdown-menu').toggleClass('active');
  });
});

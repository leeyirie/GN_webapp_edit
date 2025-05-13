$(document).ready(function () {
  // 탭 버튼 클릭 시 탭 컨텐츠 전환
  $('.tab-btn').click(function () {
    // 모든 탭 버튼의 active 클래스 제거
    $('.tab-btn').removeClass('active');
    // 클릭한 탭 버튼에 active 클래스 추가
    $(this).addClass('active');

    // 모든 탭 컨텐츠 숨기기
    $('.tab-content').removeClass('active');

    // 클릭한 탭에 해당하는 컨텐츠 표시
    const tabId = $(this).data('tab');
    $('.' + tabId).addClass('active');
  });

  // URL에서 쿼리 파라미터 가져오기
  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // URL에서 탭 정보 가져오기
  const tabParam = getParameterByName('tab');
  if (tabParam === 'info') {
    // 병원정보 탭 활성화
    $('.tab-btn[data-tab="hospital-info"]').addClass('active');
    $('.tab-btn[data-tab="hospital-events"]').removeClass('active');
    $('.hospital-info').addClass('active');
    $('.hospital-events').removeClass('active');
  }

  // 드롭다운 정렬 기능
  $('.sort-dropdown-btn').click(function (e) {
    e.stopPropagation();
    $('.dropdown-content').toggleClass('show');
  });

  $('.sort-item').click(function () {
    // 모든 아이템에서 active 클래스 제거
    $('.sort-item').removeClass('active');

    // 클릭한 아이템에 active 클래스 추가
    $(this).addClass('active');

    // 드롭다운 버튼 텍스트 업데이트
    const selectedText = $(this).text();
    $('.sort-dropdown-btn').html(
      selectedText + ' <i class="fas fa-chevron-down"></i>'
    );

    // 드롭다운 닫기
    $('.dropdown-content').removeClass('show');
  });

  // 카테고리 필터 기능
  $('.category-filter').click(function () {
    // 모든 필터에서 active 클래스 제거
    $('.category-filter').removeClass('active');

    // 클릭한 필터에 active 클래스 추가
    $(this).addClass('active');
  });

  // 문서 클릭 시 열린 드롭다운 닫기
  $(document).click(function () {
    $('.dropdown-content').removeClass('show');
  });
});

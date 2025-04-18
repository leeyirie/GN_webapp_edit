document.addEventListener('DOMContentLoaded', function () {
  // 필터 드롭다운 기능
  const filterGroups = document.querySelectorAll('.filter-group');

  filterGroups.forEach(group => {
    const filterBtn = group.querySelector('.filter-btn');
    const options = group.querySelector('.filter-options');
    const optionsList = group.querySelectorAll('.filter-option');

    // 드롭다운 토글
    filterBtn.addEventListener('click', e => {
      e.stopPropagation();

      // 다른 모든 드롭다운 닫기
      filterGroups.forEach(otherGroup => {
        if (otherGroup !== group) {
          otherGroup.classList.remove('active');
        }
      });

      // 현재 드롭다운 토글
      group.classList.toggle('active');
    });

    // 옵션 선택
    optionsList.forEach(option => {
      option.addEventListener('click', () => {
        // 활성 상태 변경
        optionsList.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // 선택된 옵션 텍스트 업데이트
        const selectedOption = group.querySelector('.selected-option');
        selectedOption.textContent = option.textContent;

        // 드롭다운 닫기
        group.classList.remove('active');
      });
    });
  });

  // 드롭다운 외부 클릭시 닫기
  document.addEventListener('click', () => {
    filterGroups.forEach(group => {
      group.classList.remove('active');
    });
  });
});

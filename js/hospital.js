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

  // 상담하기 버튼 클릭 시 모달 열기
  const consultButtons = document.querySelectorAll('.consult-btn');
  consultButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.getElementById('reservationModal');
      modal.style.display = 'flex';
    });
  });

  // 모달 닫기 버튼 클릭 시 모달 닫기
  const closeButtons = document.querySelectorAll('.close-btn');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      modal.style.display = 'none';
    });
  });

  // 모달 외부 클릭 시 모달 닫기
  window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });

  // 예약 폼 제출
  const reservationForm = document.getElementById('reservationForm');
  if (reservationForm) {
    reservationForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('예약이 접수되었습니다. 확인 후 연락드리겠습니다.');
      document.getElementById('reservationModal').style.display = 'none';
      reservationForm.reset();
    });
  }
});

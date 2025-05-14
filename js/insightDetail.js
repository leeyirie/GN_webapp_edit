/**
 * Insight Detail Page JavaScript
 * Handles loading and displaying the appropriate insight content based on URL parameters
 */

document.addEventListener('DOMContentLoaded', function () {
  // Get the insight ID from URL parameters
  const getInsightId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1'; // Default to ID 1 if not specified
  };

  // Mock insight data - in a real app, this would come from an API
  const insightData = {
    1: {
      title: '가슴 성형하기 위해 한국행으로',
      category: '성형관광',
      date: '2024년 05월 15일',
      mainImage: './img/insight1.png',
      content: `
        <p>한국은 세계적인 성형 관광지로 자리매김하고 있습니다. 특히 가슴 성형을 포함한 다양한 미용 시술을 받기 위해 많은 외국인들이 한국을 찾고 있습니다. 2024년 상반기에는 한국을 방문한 외국인 수가 전년 대비 87% 증가한 486만 명에 달했으며, 이 중 서구권 관광객이 전체의 약 20%를 차지했습니다.</p>
        <br>
        <p>한국의 성형외과는 첨단 기술과 숙련된 의료진으로 유명하며, 이는 외국인들에게 큰 매력으로 작용하고 있습니다. 특히 서울 강남구 압구정동 등은 성형외과가 밀집된 지역으로, 외국인 환자들의 주요 방문지가 되고 있습니다.</p>
        <br>
        <h2>추천하는 신사역, 압구정 로데오역 가슴 성형 전문 성형외과</h2>
        <br>
        <p>강남 지역은 세계적으로 유명한 성형외과들이 밀집해 있으며, 그 중에서도 가슴 성형을 전문으로 하는 우수한 의료기관들이 많이 있습니다. 다음은 외국인 환자들이 많이 방문하는 가슴 성형 전문 성형외과들입니다.</p>
        <br>
        <h3>1. 팝성형외과의원 (신사역)</h3>
        <p>최신 의료 기술을 활용한 자연스러운 가슴 성형으로 유명하며, 외국인 환자들을 위한 통역 서비스와 편안한 시설을 갖추고 있습니다.</p>
        <br>
        <h3>2. 디에이성형외과의원 (압구정 로데오역)</h3>
        <p>개인 맞춤형 수술 방식으로 자연스러운 결과를 제공하며, 외국인 대상 One-Stop 서비스를 제공합니다.</p>
        <br>
        <h3>3. 리앤리성형외과 (압구정역)</h3>
        <p>풍부한 임상 경험을 바탕으로 한 높은 기술력과 안전한 수술 환경으로 많은 외국인 환자들이 방문합니다.</p>
      `,
      relatedInsights: [2, 3],
    },
    2: {
      title: '울쎄라 VS 써마지',
      category: '피부관리',
      date: '2024년 05월 10일',
      mainImage: './img/insight2.png',
      content: `
        <p>얼굴 리프팅 시술은 나이가 들면서 처지는 피부를 탄력 있게 개선하는 데 효과적입니다. 그중 써마지와 울쎄라는 비수술적 방법으로 많은 사람들에게 사랑받고 있지만, 그 차이점과 효과에 대해 정확히 알지 못하는 경우가 많습니다. 이번 기사에서는 써마지와 울쎄라의 차이점, 가격, 효과를 비교하여 어떤 사람에게 더 적합한지 알아보겠습니다.</p>
        <br>
        <h2>울쎄라와 써마지의 기본 원리</h2>
        <br>
        <h3>울쎄라</h3>
        <p>울쎄라는 집속 초음파(HIFU)를 이용하여 피부 깊숙한 층(SMAS층)까지 도달하여 열에너지를 전달합니다. 이 에너지는 콜라겐 생성을 자극하고 피부를 리프팅하는 효과가 있습니다. 주로 턱선 리프팅, 눈썹 리프팅, 목주름 개선에 효과적입니다.</p>
        <br>
        <h3>써마지</h3>
        <p>써마지는 고주파(RF) 에너지를 이용하여 피부 깊숙한 곳까지 열을 전달합니다. 이 열은 콜라겐 수축과 재생을 유도하여 피부 탄력을 개선하는 데 도움이 됩니다. 주로 전체적인 피부 탄력 개선, 모공 축소, 피부 결 개선에 효과적입니다.</p>
        <br>
        <h2>시술 효과 비교</h2>
        <p>울쎄라는 즉각적인 리프팅 효과가 있으며, 효과가 2-3년 지속될 수 있습니다. 반면 써마지는 점진적인 개선 효과를 보이며, 효과는 보통 1-2년 지속됩니다. 울쎄라는 특정 부위의 처짐에 더 효과적이며, 써마지는 전체적인 피부 질감 개선에 더 효과적입니다.</p>
      `,
      relatedInsights: [1, 3],
    },
    3: {
      title: '면접 합격을 위한 추천 시술',
      category: '피부관리',
      date: '2024년 05월 05일',
      mainImage: './img/insight3.png',
      content: `
        <p>취업 면접은 첫인상이 중요한 자리입니다. 외적인 매력이 자신감을 높이고, 면접관에게 긍정적인 인상을 줄 수 있기 때문에 많은 사람들이 면접을 앞두고 빠르게 변화할 수 있는 미용 시술을 고려하고 있습니다. 면접 전, 회복 시간이 짧고 효과가 즉각적으로 나타나는 시술들을 소개합니다.</p>
        <br>
        <h2>1. 수분 보톡스</h2>
        <p>수분 보톡스는 피부에 수분을 공급하여 탄력과 생기를 부여하는 시술입니다. 보톡스를 미세하게 주입하여 모공을 축소시키고 피부 결을 개선시키는 효과가 있습니다. 시술 후 바로 일상 생활이 가능하고, 효과는 약 3-4개월 지속됩니다.</p>
        <br>
        <h2>2. 물광 주사</h2>
        <p>물광 주사는 히알루론산, 비타민, 미네랄 등을 피부에 주입하여 촉촉하고 윤기 있는 피부를 만드는 시술입니다. 시술 직후부터 효과가 나타나며, 약 1-2주 후에 가장 좋은 상태를 보입니다. 효과는 약 1-2개월 지속됩니다.</p>
        <br>
        <h2>3. 필러</h2>
        <p>필러는 주로 히알루론산을 이용하여 얼굴의 특정 부위를 자연스럽게 볼륨업하는 시술입니다. 특히 광대뼈나 턱 라인을 부드럽게 만들어 전체적인 얼굴 균형을 개선할 수 있습니다. 시술 직후 약간의 붓기가 있을 수 있으므로, 면접 최소 1주일 전에 시술하는 것이 좋습니다.</p>
        <br>
        <h2>4. 실 리프팅</h2>
        <p>실 리프팅은 특수 실을 피부에 삽입하여 처진 피부를 즉각적으로 끌어올리는 시술입니다. 효과는 바로 나타나며, 회복 기간은 약 1-2일 정도입니다. 자연스러운 리프팅 효과로 전체적인 얼굴 인상을 밝고 긍정적으로 만들어줍니다.</p>
      `,
      relatedInsights: [1, 2],
    },
  };

  // Update the page with insight details
  const updateInsightDetails = insightId => {
    const insight = insightData[insightId] || insightData['1']; // Fallback to first insight

    // Update page title
    document.title = `${insight.title} - 강남오빠 인사이트`;

    // Update content
    const titleElement = document.querySelector('.insight-title');
    if (titleElement) titleElement.textContent = insight.title;

    const dateElement = document.querySelector('.insight-date');
    if (dateElement) dateElement.textContent = `작성일 ${insight.date}`;

    const categoryElement = document.querySelector('.insight-category');
    if (categoryElement) categoryElement.textContent = insight.category;

    const contentElement = document.querySelector('.insight-content');
    if (contentElement) contentElement.innerHTML = insight.content;

    const mainImageElement = document.querySelector('.insight-main-image');
    if (mainImageElement) mainImageElement.src = insight.mainImage;

    // Update related insights
    updateRelatedInsights(insight.relatedInsights);
  };

  // Update related insights section
  const updateRelatedInsights = relatedIds => {
    const relatedContainer = document.querySelector('.related-insights-list');
    if (!relatedContainer) return;

    relatedContainer.innerHTML = '';

    relatedIds.forEach(id => {
      const insight = insightData[id];
      if (!insight) return;

      const insightItem = document.createElement('li');
      insightItem.className = 'insight-item';
      insightItem.dataset.category = insight.category.toLowerCase();

      insightItem.innerHTML = `
        <a href="insightDetail.html?id=${id}">
          <div class="img-con">
            <img src="${insight.mainImage}" alt="${insight.title}" />
          </div>
          <div class="des-con">
            <h4 class="tit">${insight.title}</h4>
            <p class="date">${insight.date}</p>
            <p class="des">${insight.content.replace(/<[^>]*>/g, '').substring(0, 100)}...</p>
            <span class="more-view">더보기 →</span>
          </div>
        </a>
      `;

      relatedContainer.appendChild(insightItem);
    });
  };

  // Initialize
  const insightId = getInsightId();
  updateInsightDetails(insightId);
});

/**
 * Insights List Page JavaScript
 * This script handles the insights listing page functionality
 */

document.addEventListener('DOMContentLoaded', function () {
  // Category filter functionality
  const setupCategoryFilters = () => {
    const filterButtons = document.querySelectorAll('.category-filter');
    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        this.classList.add('active');

        // Get the category to filter by
        const category = this.textContent.toLowerCase();

        // Filter the insights based on category
        filterInsightsByCategory(category);
      });
    });
  };

  // Filter insights by category
  const filterInsightsByCategory = category => {
    const insightItems = document.querySelectorAll('.insight-item');

    insightItems.forEach(item => {
      if (category === '전체') {
        item.style.display = 'block';
      } else {
        const itemCategory = item.dataset.category?.toLowerCase();
        if (itemCategory === category || !itemCategory) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });

    // Update the count
    updateInsightCount();
  };

  // Update the insight count display
  const updateInsightCount = () => {
    const visibleItems = document.querySelectorAll(
      '.insight-item[style="display: block"]'
    );
    const countElement = document.querySelector('.insight-count');

    if (countElement) {
      countElement.textContent = `인사이트 ${visibleItems.length}건`;
    }
  };

  // Initialize all functionality
  const init = () => {
    setupCategoryFilters();
    // Set initial count
    updateInsightCount();
  };

  // Run initialization
  init();
});

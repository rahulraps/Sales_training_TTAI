document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const serviceTabs = document.querySelectorAll('.service-tab');
  const categoryItems = document.querySelectorAll('.category-item');

  // Service Tab Switching
  serviceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      serviceTabs.forEach(t => t.classList.remove('active'));

      // Add active class to clicked tab
      tab.classList.add('active');
    });
  });

  // Category Selection
  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all items
      categoryItems.forEach(i => i.classList.remove('active'));

      // Add active class to clicked item
      item.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const startTrainingBtn = document.getElementById('startTrainingBtn');
  const homeSection = document.getElementById('homeSection');
  const trainingSection = document.getElementById('trainingSection');
  const backToHomeBtn = document.getElementById('backToHomeBtn');
  const trainingIframe = document.getElementById('trainingIframe');
  const serviceTabs = document.querySelectorAll('.service-tab');
  const categoryItems = document.querySelectorAll('.category-item');

  // Training URL
  const TRAINING_URL = "https://toughtongue.ai/practice-interview?interview_id=new";

  // Start Training Handler
  startTrainingBtn.addEventListener('click', () => {
    // Hide home section
    homeSection.style.display = 'none';

    // Show training section
    trainingSection.style.display = 'block';

    // Scroll to top
    window.scrollTo(0, 0);

    // Load iframe if not already loaded
    if (!trainingIframe.src || trainingIframe.src === "") {
      trainingIframe.src = TRAINING_URL;
    }
  });

  // Back to Home Handler
  backToHomeBtn.addEventListener('click', () => {
    // Hide training section
    trainingSection.style.display = 'none';

    // Show home section
    homeSection.style.display = 'block';

    // Clear iframe to stop audio/video (optional, or keep it loaded)
    // trainingIframe.src = ""; 
  });

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

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const startTrainingBtn = document.getElementById('startTrainingBtn');
  const trainingOverlay = document.getElementById('trainingOverlay');
  const closeTrainingBtn = document.getElementById('closeTrainingBtn');
  const trainingIframe = document.getElementById('trainingIframe');
  const serviceTabs = document.querySelectorAll('.service-tab');
  const categoryItems = document.querySelectorAll('.category-item');

  // Training URL
  const TRAINING_URL = "https://toughtongue.ai/practice-interview?interview_id=new";

  // Start Training Handler
  startTrainingBtn.addEventListener('click', () => {
    // Show overlay
    trainingOverlay.classList.add('active');
    
    // Load iframe if not already loaded
    if (!trainingIframe.src || trainingIframe.src === "") {
      trainingIframe.src = TRAINING_URL;
    }
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
  });

  // Close Training Handler
  closeTrainingBtn.addEventListener('click', () => {
    // Hide overlay
    trainingOverlay.classList.remove('active');
    
    // Clear iframe to stop audio/video
    trainingIframe.src = "";
    
    // Restore body scrolling
    document.body.style.overflow = '';
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

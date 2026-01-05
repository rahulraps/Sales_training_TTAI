// ============================================
// RETAIL SALES COACH - INTERACTIVE FUNCTIONALITY
// ============================================

// Scenario Configuration
// Map each scenario to its ToughTongueAI iframe URL
const SCENARIO_CONFIG = {
  'upselling': {
    title: 'Upselling Mastery',
    icon: '💰',
    iframeUrl: 'https://app.toughtongueai.com/embed/681395fcf922486a45f11ed6?scenarioNameColor=%234f1212&buttonOutline=false&bg=%23e1a8a8&skipPrecheck=true'
  },
  'objections': {
    title: 'Handling Objections',
    icon: '🛡️',
    iframeUrl: 'https://app.toughtongueai.com/embed/681395fcf922486a45f11ed6?scenarioNameColor=%234f1212&buttonOutline=false&bg=%23e1a8a8&skipPrecheck=true'
  },
  'order-taking': {
    title: 'Efficient Order Taking',
    icon: '📝',
    iframeUrl: 'https://app.toughtongueai.com/embed/681395fcf922486a45f11ed6?scenarioNameColor=%234f1212&buttonOutline=false&bg=%23e1a8a8&skipPrecheck=true'
  },
  'complaints': {
    title: 'Complaint Resolution',
    icon: '🤝',
    iframeUrl: 'https://app.toughtongueai.com/embed/681395fcf922486a45f11ed6?scenarioNameColor=%234f1212&buttonOutline=false&bg=%23e1a8a8&skipPrecheck=true'
  },
  'promotions': {
    title: 'Promoting Deals',
    icon: '🎉',
    iframeUrl: 'https://app.toughtongueai.com/embed/681395fcf922486a45f11ed6?scenarioNameColor=%234f1212&buttonOutline=false&bg=%23e1a8a8&skipPrecheck=true'
  },
  'product-knowledge': {
    title: 'Product Knowledge',
    icon: '🍕',
    iframeUrl: 'https://app.toughtongueai.com/embed/681395fcf922486a45f11ed6?scenarioNameColor=%234f1212&buttonOutline=false&bg=%23e1a8a8&skipPrecheck=true'
  }
};

// DOM Elements
let scenarioSection;
let trainingSection;
let trainingIframe;
let currentScenarioTitle;
let currentScenarioIcon;
let backBtn;
let scenarioCards;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeElements();
  attachEventListeners();
  setupKeyboardNavigation();
});

// Initialize DOM references
function initializeElements() {
  scenarioSection = document.getElementById('scenarioSection');
  trainingSection = document.getElementById('trainingSection');
  trainingIframe = document.getElementById('trainingIframe');
  currentScenarioTitle = document.getElementById('currentScenarioTitle');
  currentScenarioIcon = document.getElementById('currentScenarioIcon');
  backBtn = document.getElementById('backBtn');
  scenarioCards = document.querySelectorAll('.scenario-card');
}

// Attach event listeners
function attachEventListeners() {
  // Scenario card click handlers
  scenarioCards.forEach(card => {
    card.addEventListener('click', () => {
      const scenario = card.dataset.scenario;
      loadScenario(scenario);
    });
  });

  // Back button handler
  backBtn.addEventListener('click', returnToScenarios);
}

// Setup keyboard navigation for accessibility
function setupKeyboardNavigation() {
  scenarioCards.forEach(card => {
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const scenario = card.dataset.scenario;
        loadScenario(scenario);
      }
    });
  });

  backBtn.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      returnToScenarios();
    }
  });
}

// Load selected scenario
function loadScenario(scenarioKey) {
  const scenario = SCENARIO_CONFIG[scenarioKey];

  if (!scenario) {
    console.error(`Scenario ${scenarioKey} not found`);
    return;
  }

  // Update UI
  currentScenarioTitle.textContent = scenario.title;
  currentScenarioIcon.textContent = scenario.icon;

  // Show loading state
  trainingIframe.classList.add('loading');

  // Load iframe
  trainingIframe.src = scenario.iframeUrl;

  // Remove loading state after iframe loads
  trainingIframe.addEventListener('load', () => {
    trainingIframe.classList.remove('loading');
  }, { once: true });

  // Switch sections with smooth transition
  switchToTraining();

  // Track scenario selection (you can integrate analytics here)
  trackScenarioSelection(scenarioKey);
}

// Switch from scenario selection to training view
function switchToTraining() {
  // Fade out scenario section
  scenarioSection.style.opacity = '0';
  scenarioSection.style.transition = 'opacity 0.3s ease';

  setTimeout(() => {
    scenarioSection.classList.add('hidden');
    trainingSection.classList.add('active');

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Reset opacity for next time
    scenarioSection.style.opacity = '1';
  }, 300);
}

// Return to scenario selection
function returnToScenarios() {
  // Fade out training section
  trainingSection.style.opacity = '0';
  trainingSection.style.transition = 'opacity 0.3s ease';

  setTimeout(() => {
    trainingSection.classList.remove('active');
    scenarioSection.classList.remove('hidden');

    // Clear iframe to stop any ongoing session
    trainingIframe.src = '';

    // Smooth scroll to scenarios
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Reset opacity for next time
    trainingSection.style.opacity = '1';
  }, 300);
}

// Analytics tracking (optional - customize based on your needs)
function trackScenarioSelection(scenarioKey) {
  // Example: Google Analytics tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', 'scenario_selected', {
      'event_category': 'Training',
      'event_label': scenarioKey,
      'value': 1
    });
  }

  // Example: Console logging for development
  console.log(`Scenario selected: ${scenarioKey}`);

  // You can add more tracking services here
  // - Facebook Pixel
  // - Mixpanel
  // - Custom analytics endpoint
}

// Handle window resize for responsive iframe
window.addEventListener('resize', () => {
  adjustIframeHeight();
});

// Adjust iframe height for mobile devices
function adjustIframeHeight() {
  if (window.innerWidth <= 768) {
    trainingIframe.style.height = '600px';
  } else if (window.innerWidth <= 480) {
    trainingIframe.style.height = '500px';
  } else {
    trainingIframe.style.height = '700px';
  }
}

// Initial adjustment
adjustIframeHeight();

// Handle page visibility change (pause when tab is hidden)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page hidden - user switched tabs');
    // You could pause timers or log this event
  } else {
    console.log('Page visible - user returned');
  }
});

// Prevent accidental navigation away from active training
window.addEventListener('beforeunload', (e) => {
  // Only warn if training is active
  if (trainingSection.classList.contains('active')) {
    e.preventDefault();
    e.returnValue = 'You have an active training session. Are you sure you want to leave?';
    return e.returnValue;
  }
});

// Error handling for iframe loading failures
trainingIframe.addEventListener('error', () => {
  console.error('Failed to load training iframe');
  alert('Failed to load training session. Please check your internet connection and try again.');
  returnToScenarios();
});

// Performance monitoring (optional)
if ('PerformanceObserver' in window) {
  const perfObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        console.log(`Page load time: ${entry.loadEventEnd - entry.fetchStart}ms`);
      }
    }
  });

  try {
    perfObserver.observe({ entryTypes: ['navigation'] });
  } catch (e) {
    // Older browser, skip performance monitoring
    console.log('Performance monitoring not supported');
  }
}

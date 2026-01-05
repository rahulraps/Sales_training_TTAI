# 🍕 Domino's Retail Sales Coach

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()

> AI-Powered Sales Training Platform for Domino's Team Members

Master your sales skills with interactive, scenario-based training powered by ToughTongueAI. Practice real-world situations and build confidence in a safe, supportive environment.

## 🌟 Features

- **6 Training Scenarios**
  - 💰 Upselling Mastery
  - 🛡️ Handling Objections
  - 📝 Efficient Order Taking
  - 🤝 Complaint Resolution
  - 🎉 Promoting Deals
  - 🍕 Product Knowledge

- **AI-Powered Conversations** - Practice with intelligent, adaptive training scenarios
- **Premium Design** - Modern UI with Domino's branding, smooth animations, and responsive layouts
- **Accessibility First** - Full keyboard navigation and ARIA support
- **Mobile Optimized** - Works seamlessly on all devices

## 🚀 Quick Start

### Option 1: View Locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Sales_training_TTAI.git
cd Sales_training_TTAI
```

2. Open `index.html` in your browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2: Deploy to GitHub Pages

1. Push your repository to GitHub
2. Go to **Settings** → **Pages**
3. Select **main** branch as source
4. Your site will be live at: `https://yourusername.github.io/Sales_training_TTAI/`

## 📁 Project Structure

```
Sales_training_TTAI/
├── index.html          # Main HTML file
├── styles.css          # Complete design system
├── script.js           # Interactive functionality
└── README.md           # Documentation
```

## 🎨 Design System

### Color Palette
- **Primary Red**: `#E31837` - Domino's signature red
- **Primary Blue**: `#006491` - Domino's signature blue
- **White**: `#FFFFFF` - Clean backgrounds

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

### Key Features
- Smooth gradients and modern shadows
- Glassmorphism effects
- CSS animations and micro-interactions
- Responsive breakpoints for all devices

## 🛠️ Customization

### Adding New Scenarios

1. **Update HTML** - Add a new scenario card in `index.html`:
```html
<div class="scenario-card" data-scenario="your-scenario" tabindex="0">
  <span class="scenario-icon">🎯</span>
  <h3 class="scenario-title">Your Scenario Title</h3>
  <p class="scenario-description">Description here</p>
  <span class="scenario-tag">Your Tag</span>
</div>
```

2. **Update JavaScript** - Add configuration in `script.js`:
```javascript
const SCENARIO_CONFIG = {
  'your-scenario': {
    title: 'Your Scenario Title',
    icon: '🎯',
    iframeUrl: 'https://app.toughtongueai.com/embed/YOUR_ID?skipPrecheck=true'
  }
};
```

### Changing Colors

Edit CSS variables in `styles.css`:
```css
:root {
  --dominos-red: #E31837;
  --dominos-blue: #006491;
  /* Add more custom colors */
}
```

## 🔒 Browser Permissions

The training platform requires microphone and camera permissions for voice-based AI training scenarios. Users will be prompted when starting a session.

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **ToughTongueAI** - AI conversation training platform
- **Domino's Pizza** - Brand and vision
- **Google Fonts** - Typography (Poppins, Inter)

## 💡 Support

For issues or questions, please [open an issue](https://github.com/yourusername/Sales_training_TTAI/issues) on GitHub.

---

**Made with ❤️ for Domino's Team Members**

🍕 *Delivering Excellence, One Conversation at a Time* 🍕

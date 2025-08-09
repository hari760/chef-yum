# Chef-Yum 🍳

A React-based recipe generator that transforms your available ingredients into delicious recipes using AI. Simply input your ingredients and let Chef-Yum create amazing recipes for you!

## 🚀 Features

- **Smart Ingredient Input**: Add multiple ingredients with an intuitive interface
- **AI-Powered Recipe Generation**: Uses Anthropic's Claude AI to create unique, personalized recipes
- **Clean Component Architecture**: Well-organized React components for maintability
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Recipe Creation**: Get instant recipe suggestions with detailed instructions

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager
- An Anthropic API key ([Get one here](https://console.anthropic.com/))

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd CHEF-YUM
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure your API key**
   
   Navigate to `src/api_key.js` and replace the placeholder with your actual Anthropic API key:
   ```javascript
   // src/api_key.js
   const API_KEY = "your_actual_api_key_here"; // Replace this with your real API key
   export default API_KEY;
   ```

   **⚠️ IMPORTANT**: Never commit your actual API key to version control!

## 🗂️ Project Structure

```
CHEF-YUM/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ClaudeRecipe.jsx      # Main recipe generation component
│   │   ├── Header.jsx            # App header component
│   │   ├── IngredientList.jsx    # Displays list of added ingredients
│   │   └── Main.jsx              # Main app component
│   ├── ai.js                     # AI/Anthropic API integration
│   ├── api_key.js               # API key configuration (⚠️ Add your key here)
│   ├── App.jsx                  # Root app component
│   ├── index.css                # Global styles
│   └── index.jsx                # App entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 🎯 Usage

1. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Open your browser**
   
   Navigate to `http://localhost:5173` (Vite's default port)

3. **Generate recipes**
   - Use the ingredient input to add items to your list
   - Click the generate recipe button
   - Watch as Chef-Yum creates a personalized recipe for you!
   - Follow the detailed cooking instructions provided

## 🔧 Key Components

### ClaudeRecipe.jsx
The main component that handles recipe generation using the Anthropic API. Manages ingredient state and displays generated recipes.

### Header.jsx
App navigation and branding component.

### IngredientList.jsx  
Displays the current list of ingredients with options to add/remove items.

### Main.jsx
Primary application layout and component orchestration.

### ai.js
Service module that handles all communication with the Anthropic Claude API.

### api_key.js
Configuration file for storing the API key (⚠️ **You need to add your key here!**)


### Setting Up Your API Key

1. Sign up at [Anthropic Console](https://console.anthropic.com/)
2. Create a new API key
3. Open `src/api_key.js`
4. Replace the placeholder text with your actual key:

```javascript
// src/api_key.js
const API_KEY = "sk-ant-api03-your-actual-key-here";
export default API_KEY;
```


## 📦 Dependencies

### Main Dependencies
- `react`: ^18.x
- `react-dom`: ^18.x  
- `@anthropic-ai/sdk`: Latest version

### Development Tools
- `vite`: ^5.x (Build tool)
- `eslint`: Code linting
- `@vitejs/plugin-react`: React plugin for Vite

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```


**Remember**: Implement proper API key security before production deployment!


**Please don't commit actual API keys!**


**Ready to cook something amazing? Let's get Chef-Yum running! 🍽️✨**

### Quick Start Checklist
- [ ] Clone the repository
- [ ] Run `npm install`
- [ ] Add your API key to `src/api_key.js`
- [ ] Run `npm run dev`
- [ ] Start creating delicious recipes!

---

*Happy cooking with Chef-Yum!* 👨‍🍳👩‍🍳

# Lab 2 - React Hooks Implementation

## 🎯 Features Implemented

### 1. Modal Component for Orchid Details
- **Component**: `Modal.js` and `Modal.css`
- **Functionality**: 
  - Displays detailed information about selected orchid
  - Opens when user clicks "Detail" button on any orchid card
  - Can be closed by:
    - Clicking the X button
    - Clicking outside the modal
    - Pressing the ESC key
- **Information Displayed**:
  - Large orchid image
  - Name and rating
  - Category, origin, and color
  - Number of likes
  - Type (Natural/Hybrid)
  - Status (Special/Regular Collection)
  - Descriptive text about the orchid
  - Badges for special and natural orchids

### 2. Dark/Light Mode Toggle
- **Component**: `ThemeToggle.js` and `ThemeToggle.css`
- **Functionality**:
  - Fixed toggle button in top-right corner
  - Smoothly switches between light and dark themes
  - Saves preference to localStorage
  - Persists across page refreshes
- **Theme Changes**:
  - Background gradients (purple for light, dark blue for dark)
  - Card backgrounds (white for light, dark gray for dark)
  - Text colors (dark for light, light for dark)
  - All UI elements adapt to the selected theme

### 3. Custom Hooks

#### useTheme Hook (`hooks/useTheme.js`)
- Manages theme state (light/dark)
- Saves theme preference to localStorage
- Applies theme to document root element
- Provides `toggleTheme` function

#### useModal Hook (`hooks/useModal.js`)
- Manages modal open/close state
- Handles modal data
- Prevents body scrolling when modal is open
- Provides `openModal` and `closeModal` functions

## 📁 Project Structure

```
Lab2/
├── src/
│   ├── components/
│   │   ├── Modal.js              # Modal component for orchid details
│   │   ├── Modal.css             # Modal styling
│   │   ├── OrchidCard.js         # Updated with Detail button
│   │   ├── OrchidCard.css        # Updated with dark mode support
│   │   ├── OrchidsList.js        # Passes modal handler to cards
│   │   ├── OrchidsList.css       # Updated with theme support
│   │   ├── OrchidsContainer.js   # Integrates modal functionality
│   │   ├── ThemeToggle.js        # Theme toggle button
│   │   └── ThemeToggle.css       # Theme toggle styling
│   ├── hooks/
│   │   ├── useTheme.js           # Custom hook for theme management
│   │   └── useModal.js           # Custom hook for modal management
│   ├── data/
│   │   └── ListOfOrchids.js      # Orchid data (unchanged)
│   ├── App.js                    # Main app with theme integration
│   ├── App.css                   # Updated with dark mode support
│   ├── index.js                  # Entry point
│   └── index.css                 # Global styles
└── package.json
```

## 🎨 Design Features

### Beautiful UI Elements
1. **Smooth Animations**:
   - Card hover effects with lift and shadow
   - Modal fade-in and slide-up animations
   - Button hover effects
   - Theme transition animations

2. **Modern Styling**:
   - Gradient backgrounds
   - Glassmorphism effects
   - Rounded corners and shadows
   - Beautiful color schemes

3. **Responsive Design**:
   - Works on desktop, tablet, and mobile
   - Adaptive grid layout
   - Mobile-friendly modal
   - Touch-friendly buttons

4. **Accessibility**:
   - Keyboard navigation support (ESC to close modal)
   - ARIA labels for screen readers
   - High contrast text
   - Focus indicators

## 🚀 How to Use

### Starting the Application
```bash
npm start
```

### Viewing Orchid Details
1. Browse the orchid collection
2. Click the "Detail" button on any orchid card
3. View detailed information in the modal
4. Close by clicking X, outside modal, or pressing ESC

### Switching Themes
1. Click the theme toggle button in the top-right corner
2. The entire application switches between light and dark mode
3. Your preference is automatically saved

## 🔧 Technical Implementation

### React Hooks Used
1. **useState**: Managing component state
2. **useEffect**: Side effects (loading data, theme persistence)
3. **useCallback**: Optimizing modal functions
4. **Custom Hooks**: Reusable logic for theme and modal

### CSS Features
1. **CSS Variables**: Dynamic theming
2. **Flexbox & Grid**: Responsive layouts
3. **Animations & Transitions**: Smooth UI interactions
4. **Media Queries**: Mobile responsiveness

### Best Practices
1. **Component Separation**: Container vs Presentation components
2. **Custom Hooks**: Reusable logic extraction
3. **Props Drilling Prevention**: Clean component hierarchy
4. **Performance Optimization**: useCallback for stable function references
5. **User Experience**: Loading states, smooth transitions

## ✅ Requirements Met

- ✅ Modal displays detailed orchid information on Detail button click
- ✅ Dark/Light mode toggle for entire application
- ✅ At least two custom hooks (useTheme & useModal)
- ✅ Images loaded from URLs
- ✅ Data stored in ListOfOrchids.js
- ✅ Beautiful and attractive UI
- ✅ Full React Hooks implementation

## 🎓 Learning Outcomes

1. Understanding and implementing Custom Hooks
2. Managing global state with hooks
3. Creating reusable, maintainable components
4. Implementing dark mode with CSS variables
5. Building accessible modals
6. Handling user interactions and events
7. Persisting data with localStorage
8. Creating smooth animations and transitions

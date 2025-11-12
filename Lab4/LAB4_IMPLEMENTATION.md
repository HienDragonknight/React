# Lab 4 - React UI Library, Formik, Yup Implementation

## Overview
Lab 4 successfully implements Material UI components, Formik form handling, and Yup validation in the Orchids Collection app.

## Dependencies Installed
- **@mui/material** (^7.3.5) - Material UI core components
- **@emotion/react** (^11.14.0) - Required for Material UI styling
- **@emotion/styled** (^11.14.1) - Styled components for Material UI
- **@mui/icons-material** (^7.3.5) - Material UI icon library
- **formik** (^2.4.6) - Form management library
- **yup** (^1.7.1) - Schema validation library

## Routes Implemented
1. **/** - Home page with all orchids (with tabs for filtering)
2. **/about** - About page with accordions and feature cards
3. **/naturals** - Filtered page showing only natural orchids
4. **/specials** - Filtered page showing only special orchids
5. **/orchid/:id** - Detail page with modal for image zoom
6. **/contact** - Contact form with Formik & Yup validation

## Components Updated

### 1. Navigation.js
- **Material UI Components**: AppBar, Toolbar, Button, Container
- **Features**: 
  - Sticky navigation with gradient background
  - Active route highlighting
  - Icon buttons for all navigation items

### 2. OrchidsList.js
- **Material UI Components**: Container, Tabs, Tab, Paper, Grid
- **Features**:
  - Tab-based filtering (All, Special, Natural)
  - Responsive grid layout
  - Dynamic count display in tabs

### 3. OrchidCard.js
- **Material UI Components**: Card, CardMedia, CardContent, CardActions, Chip, Rating, Button
- **Features**:
  - Hover effects with elevation changes
  - Badge chips for Special/Natural status
  - Star ratings
  - Responsive design

### 4. Detail.js
- **Material UI Components**: Container, Grid, Paper, Card, Modal, Backdrop, Fade, Rating, Chip
- **Features**:
  - Modal for image zoom functionality
  - Grid layout for orchid information
  - Cards for organized data display
  - Gradient background for likes section
  - Back button navigation

### 5. Contact.js
- **Material UI Components**: TextField, Button, Alert, Snackbar, Grid, Paper, Card
- **Formik Integration**: Form handling with validation
- **Yup Validation Schema**:
  - Name: 2-50 characters, required
  - Email: Valid email format, required
  - Subject: 5-100 characters, required
  - Message: 10-500 characters, required
- **Features**:
  - Real-time validation error messages
  - Success notification via Snackbar
  - Contact information cards
  - Embedded Google Maps

### 6. About.js (New Component)
- **Material UI Components**: Accordion, Card, Avatar, Grid
- **Features**:
  - Feature cards with icons
  - FAQ section with accordions
  - Gradient mission statement card
  - Responsive grid layout

### 7. Natural.js (New Component)
- **Features**: 
  - Filters and displays only natural orchids (isNatural: true)
  - Grid layout using OrchidCard components

### 8. Special.js (New Component)
- **Features**:
  - Filters and displays only special orchids (isSpecial: true)
  - Grid layout using OrchidCard components

### 9. App.js
- **Material UI Integration**: ThemeProvider, CssBaseline
- **Custom Theme**: Purple gradient color scheme (#667eea, #764ba2)
- **All Routes**: Configured for navigation between pages

## Material UI Components Used
- **Layout**: Container, Box, Grid, Paper
- **Navigation**: AppBar, Toolbar, Tabs, Tab
- **Data Display**: Card, CardContent, CardMedia, CardActions, Chip, Avatar, Rating
- **Inputs**: TextField, Button
- **Feedback**: Snackbar, Alert, Modal, Backdrop
- **Surfaces**: Accordion, AccordionSummary, AccordionDetails
- **Icons**: Various icons from @mui/icons-material

## Formik & Yup Implementation
The Contact form demonstrates proper form validation:
- **Formik** handles form state, submission, and validation
- **Yup** provides schema-based validation rules
- Real-time error messages displayed below fields
- Form resets after successful submission
- Loading state during submission

## Key Features
1. ✅ Beautiful, modern UI with Material UI
2. ✅ Responsive design for all screen sizes
3. ✅ Tab-based filtering on home page
4. ✅ Modal for image zoom on detail page
5. ✅ Form validation with helpful error messages
6. ✅ Accordion FAQ section on About page
7. ✅ Gradient backgrounds for visual appeal
8. ✅ Icon integration throughout the app
9. ✅ Smooth transitions and hover effects
10. ✅ Consistent color theme

## Running the Application
```bash
npm start
```

The application will run on http://localhost:3000

## Testing the Contact Form Validation
Try these to see validation in action:
- Submit empty form (all fields required)
- Enter invalid email format
- Enter name with only 1 character
- Enter message with less than 10 characters

All validation rules will display helpful error messages!

# EcoLife - Sustainability Tracking Application

A comprehensive sustainability tracking web application designed to help users monitor and reduce their environmental impact through interactive carbon footprint calculations and personalized recommendations.

## 🌱 Overview

EcoLife is a comprehensive sustainability tracking application designed to help users monitor and reduce their environmental impact. The application features a carbon footprint calculator, personalized recommendations, and a contact system for user engagement. Built with a modern tech stack including React, TypeScript, and PostgreSQL, it provides an intuitive interface for environmental awareness and action.



## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and build processes
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth user interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Connection**: Neon Database serverless driver
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Session Storage**: In-memory storage with fallback to PostgreSQL sessions

### Key Design Decisions
- **Monorepo Structure**: Shared schema and types between client and server
- **Type Safety**: Full TypeScript coverage across the entire application
- **Component Architecture**: Modular, reusable components with consistent styling
- **Responsive Design**: Mobile-first approach with dark/light theme support

## Key Components

### Frontend Components
1. **Navigation**: Fixed navigation with smooth scrolling and theme toggling
2. **Hero Section**: Landing page with call-to-action and animated elements
3. **Carbon Calculator**: Interactive form for calculating environmental impact
4. **Features Section**: Showcases application capabilities
5. **Contact Form**: User engagement and feedback collection
6. **Theme System**: Dark/light mode with persistent preferences

### Backend Components
1. **Express Server**: RESTful API with middleware for logging and error handling
2. **Storage Layer**: Abstract storage interface with in-memory implementation
3. **Route Handlers**: Contact form submission and data retrieval endpoints
4. **Database Schema**: Users and contacts tables with proper relationships

### UI Component Library
- Complete Shadcn/ui component suite including forms, dialogs, tooltips, and data display
- Consistent design system with CSS variables for theming
- Accessibility-first components with proper ARIA support


## 🚀 Live Demo

[view Demo](https://reaishma.github.io/EcoWebPlus-/)

## Data Flow

### Contact Form Flow
1. User fills out contact form with validation
2. Frontend submits data via POST /api/contact
3. Backend validates using Zod schema
4. Data stored in PostgreSQL contacts table
5. Success/error feedback displayed to user


## 🧮 Carbon Calculator

The carbon footprint calculator evaluates four key areas:

### Transportation
- Monthly driving miles
- Fuel type (Gasoline, Diesel, Electric, Hybrid)
- Emission factors based on fuel type

### Energy Usage
- Monthly electricity bill
- Monthly gas bill
- Conversion to CO₂ emissions

### Food & Diet
- Diet type (Omnivore, Vegetarian, Vegan, Pescatarian)
- Local food consumption percentage
- Diet-specific emission factors

### Lifestyle
- Annual flights
- Household size
- Additional lifestyle factors

## 🎯 Personalized Recommendations

Based on calculated emissions, the app provides targeted suggestions:

- **Transportation**: Public transit, carpooling, electric vehicles
- **Energy**: LED bulbs, renewable energy sources
- **Food**: Reduced meat consumption, local produce
- **Lifestyle**: Flight offsetting, sustainable travel choices

##📋 Usage Guide

### Getting Started
1. **Navigation**: Use the top navigation to jump between sections
2. **Theme Toggle**: Click the theme button to switch between light/dark modes
3. **Calculator**: Fill in your lifestyle data and click "Calculate My Impact"
4. **Recommendations**: Review personalized suggestions based on your results
5. **Contact**: Use the contact form to connect with the development team

### Calculator Tips
- **Accuracy**: Provide accurate data for better recommendations
- **Monthly Values**: Enter monthly averages for consistent calculations
- **Household Size**: Include all household members for accurate per-person emissions


### Theme Management
1. Theme preference stored in localStorage
2. CSS variables updated dynamically
3. Theme context provides global state management

## ✅External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **zod**: Runtime type validation
- **wouter**: Lightweight routing

### UI Dependencies
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe CSS class management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **esbuild**: Backend bundling for production

## 🛠️Deployment Strategy

### Development Environment
- Vite development server with hot module replacement
- TypeScript compilation and type checking
- Database migrations via Drizzle Kit
- Environment-specific configuration

### Production Build
- Frontend: Vite build with optimized assets
- Backend: esbuild compilation to ESM format
- Database: PostgreSQL with connection pooling
- Environment variables for configuration

### Database Management
- Drizzle Kit for schema management and migrations
- PostgreSQL connection via environment variables
- Shared schema definitions between client and server

### Key Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment specification
- Theme and styling configurations via CSS variables


## 📊 Performance

- **Load Time**: < 2 seconds on standard connections
- **File Size**: Single HTML file (~50KB)
- **Animations**: 60fps smooth animations
- **Responsive**: Fast rendering on all device sizes

## 🤝 Contributing
1. **Bug Reports**: Report any issues or unexpected behavior
2. **Feature Requests**: Suggest new functionality or improvements
3. **Code Improvements**: Optimize existing code or add new features
4. **Documentation**: Improve or expand documentation

## 📝 License

This project is open source and available under the GNU GENERAL PUBLIC LICENSE Version 📄.

## 👨‍💻 Developer

**Reaishma N**
- Email: [vra.9618@gmail.com](mailto:vra.9618@gmail.com)
- GitHub: [https://github.com/Reaishma](https://github.com/Reaishma)

## 🌍 Environmental Impact

By using EcoLife, you're contributing to:
- **Awareness**: Understanding personal environmental impact
- **Action**: Taking concrete steps toward sustainability
- **Education**: Learning about carbon footprints and eco-friendly practices
- **Community**: Joining a movement for environmental responsibility

## 📞 Support

For support, questions, or feedback:
- **Email**: vra.9618@gmail.com
- **GitHub Issues**: Report bugs or request features
- **Documentation**: Refer to this README for detailed information

---

**EcoLife** - Making sustainable living simple, one calculation at a time. 🌱

*"Every small action contributes to a larger impact. Start your sustainable journey today!"*




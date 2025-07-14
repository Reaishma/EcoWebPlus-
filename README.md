# EcoLife - Sustainability Tracking Application

## Overview

EcoLife is a comprehensive sustainability tracking application designed to help users monitor and reduce their environmental impact. The application features a carbon footprint calculator, personalized recommendations, and a contact system for user engagement. Built with a modern tech stack including React, TypeScript, and PostgreSQL, it provides an intuitive interface for environmental awareness and action.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### December 2024 - Complete Website Export
- Created complete HTML/CSS/JavaScript version (ecolife-complete.html)
- Removed contact information from Connect section as requested
- Fixed number input issues in calculator to prevent leading zeros
- Made all "Learn More" links functional with proper section navigation
- Removed "Resources" and "Follow Us" sections from footer
- Removed "All rights reserved" text from footer
- Generated comprehensive README.md with full project documentation

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

## Data Flow

### Contact Form Flow
1. User fills out contact form with validation
2. Frontend submits data via POST /api/contact
3. Backend validates using Zod schema
4. Data stored in PostgreSQL contacts table
5. Success/error feedback displayed to user

### Carbon Calculator Flow
1. User inputs lifestyle data (transportation, energy, diet, etc.)
2. Frontend calculates emissions using predefined factors
3. Results displayed with personalized recommendations
4. Progress tracking capabilities for future iterations

### Theme Management
1. Theme preference stored in localStorage
2. CSS variables updated dynamically
3. Theme context provides global state management

## External Dependencies

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

## Deployment Strategy

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

This architecture provides a solid foundation for a sustainability tracking application with room for future enhancements like user authentication, data analytics, and social features.

License
GNU GENERAL PUBLIC LICENSE Version 📄


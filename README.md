# Unique Backend Developer Resume Website

A modern and interactive resume website designed for backend developers, featuring a clean UI that showcases skills, experience, and testimonials.

## Tech Stack

### Backend
- NestJS with TypeScript
- RESTful API architecture
- Modular design with dependency injection
- Docker for containerization

### Frontend
- Next.js with TypeScript
- React for component-based UI
- TailwindCSS for styling
- Framer Motion for animations
- Responsive design for all devices

## Features

- **Interactive UI**: Modern design with animations and transitions
- **Responsive Layout**: Works on mobile, tablet, and desktop
- **Skills Visualization**: Visual representation of skill proficiency
- **Testimonials**: Display LinkedIn recommendations
- **Contact Form**: Allow visitors to reach out
- **Dockerized**: Easy deployment with Docker

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Docker & Docker Compose (for containerized deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/backend-dev-resume.git
cd backend-dev-resume
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Run the development servers:

```bash
# Run backend (from backend directory)
npm run start:dev

# Run frontend (from frontend directory)
npm run dev
```

4. Open your browser and navigate to:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

### Docker Deployment

To run the application using Docker:

```bash
# Build and start containers
docker-compose up -d

# Stop containers
docker-compose down
```

## LinkedIn Testimonials Feature

To include your own LinkedIn testimonials:

1. Request your connections to write recommendations on your LinkedIn profile
2. Copy these testimonials and add them to the backend data
3. Make sure to include:
   - Name and title of the person
   - Their relationship to you
   - The testimonial text
   - Link to their LinkedIn profile (optional)
   - Professional photo (if available)

## Customization

### Backend
- Edit the data in the service files to include your personal information
- Add or remove modules as needed

### Frontend
- Modify the theme colors in `styles/globals.css`
- Update personal information by editing API responses
- Add additional sections as needed

## License

MIT

## Contact

For questions or suggestions, please reach out at rishavkumar446@gmail.com
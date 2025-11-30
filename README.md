# Maharashtra Districts & Cities React App

A simple React application that displays Maharashtra's districts and cities in both graph and table formats.

## Features

- **Interactive Charts**: 
  - Bar chart showing number of cities per district
  - Bar chart showing population distribution across districts
- **Data Table**: 
  - Toggle between Districts view and Cities view
  - Shows district names, cities, city count, and population
- **No Backend Required**: All data is static and included in the application

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

## Docker Deployment

### Build the Docker image:

```bash
docker build -t maharashtra-cities-app .
```

### Run the Docker container:

```bash
docker run -d -p 8080:80 --name maharashtra-app maharashtra-cities-app
```

The application will be available at `http://localhost:8080`

### Stop and remove the container:

```bash
docker stop maharashtra-app
docker rm maharashtra-app
```

## Technologies Used

- React 18
- Vite (build tool)
- Recharts (for chart visualizations)
- CSS3 (for styling)

## Data

The application includes data for 20 major districts of Maharashtra with their cities and population information.


the given project
Weather App - React Vite with Tailwind CSS
[Weather App Screenshot](public/screenshot/weather.png.)

Overview
A responsive weather application built with React, Vite, and Tailwind CSS that displays current weather conditions for any city worldwide. This is a conversion of an original vanilla JavaScript project to a modern React implementation.

Features
Real-time weather data from OpenWeatherMap API

Search by city name

Displays:

Current temperature

Weather condition (with visual icon)

Humidity

Wind speed

Responsive design

Error handling for invalid city names

Keyboard support (press Enter to search)

Technologies Used
React

Vite

Tailwind CSS

OpenWeatherMap API

Installation
Clone the repository:

bash
git clone https://github.com/your-username/weather-app.git
Navigate to the project directory:

bash
cd weather-app
Install dependencies:

bash
npm install
Configuration
Get your free API key from OpenWeatherMap

Create a .env file in the root directory:

env
VITE_APP_WEATHER_API_KEY=your_api_key_here
Replace your_api_key_here with your actual OpenWeatherMap API key

Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build locally

npm run lint - Run ESLint

Project Structure
src/
├── components/
│   └── WeatherCard.jsx    # Main weather component
├── assets/
│   └── images/            # All weather icons
├── App.jsx                # Root component
├── main.jsx               # Application entry point
└── index.css              # Tailwind CSS file
API Usage
This application uses the OpenWeatherMap Current Weather Data API:

Endpoint: https://api.openweathermap.org/data/2.5/weather

Parameters: q={city name}&units=metric&appid={API key}

License
This project is open source and available under the MIT License.

Acknowledgements
Weather data provided by OpenWeatherMap



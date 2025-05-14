import { useState } from 'react';
import weatherIcons from '../assets/images';

const WeatherCard = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const ApiKey = import.meta.env.VITE_API_KEY;
  const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const checkWeather = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
      
      if (response.status === 404) {
        setError(true);
        setWeather(null);
        return;
      }

      const data = await response.json();
      setWeather(data);
      setError(false);
    } catch (err) {
      setError(true);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkWeather();
    }
  };

  const getWeatherIcon = (main) => {
    switch (main) {
      case 'Clouds': return weatherIcons.cloudsIcon;
      case 'Clear': return weatherIcons.clearIcon;
      case 'Rain': return weatherIcons.rainIcon;
      case 'Drizzle': return weatherIcons.drizzleIcon;
      case 'Mist': return weatherIcons.mistIcon;
      case 'Snow': return weatherIcons.snowIcon;
      default: return weatherIcons.clearIcon;
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-start justify-center pt-20 px-4">
      <div className="w-full max-w-md bg-gradient-to-br from-teal-500 to-indigo-700 text-white rounded-3xl p-10 text-center shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Enter the city name"
            className="flex-1 border-0 outline-none bg-gray-100 text-gray-700 py-3 px-6 rounded-full mr-4 text-lg"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            spellCheck="false"
          />
          <button
            className="bg-gray-100 rounded-full w-14 h-14 flex items-center justify-center cursor-pointer transition hover:bg-gray-200"
            onClick={checkWeather}
          >
            <img src={weatherIcons.searchIcon} alt="search" className="w-4" />
          </button>
        </div>

        {error && (
          <p className="text-left ml-2 mt-2 text-sm text-red-100">
            Invalid city name
          </p>
        )}

        {loading && (
          <div className="mt-8 text-lg">Loading...</div>
        )}

        {weather && !error && !loading && (
          <div className="weather-info">
            <img
              src={getWeatherIcon(weather.weather[0].main)}
              alt={weather.weather[0].main}
              className="w-40 mx-auto mt-8"
            />
            <h1 className="text-7xl font-medium mt-6">
              {Math.round(weather.main.temp)}°C
            </h1>
            <h2 className="text-4xl font-normal mt-1">{weather.name}</h2>

            <div className="flex justify-between mt-12 px-5">
              <div className="flex items-center">
                <img src={weatherIcons.humidityIcon} alt="humidity" className="w-10 mr-2" />
                <div>
                  <p className="text-2xl -mb-1">{weather.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={weatherIcons.windIcon} alt="wind" className="w-10 mr-2" />
                <div>
                  <p className="text-2xl -mb-1">{weather.wind.speed} km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
import React from 'react';
import { useSelector } from 'react-redux';
// import './WeatherWidget.css';

const WeatherWidget = () => {
  const { data, loading, error } = useSelector(state => state.weather);

  // Get appropriate weather icon
  const getWeatherIcon = (condition) => {
    if (!condition) return '🌥️';
    
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('sun') || conditionLower.includes('clear')) return '☀️';
    if (conditionLower.includes('cloud')) return '☁️';
    if (conditionLower.includes('rain')) return '🌧️';
    if (conditionLower.includes('snow')) return '❄️';
    if (conditionLower.includes('storm') || conditionLower.includes('thunder')) return '⚡';
    return '🌥️';
  };

  // Get weather-related task suggestion
  const getTaskSuggestion = () => {
    if (!data || !data.current) return null;

    const temp = data.current.temp_c;
    const isRaining = data.current.condition?.text?.toLowerCase().includes('rain');
    const isSunny = data.current.condition?.text?.toLowerCase().includes('sunny');
    
    if (isRaining) {
      return "It's raining. Good time to catch up on indoor tasks!";
    } else if (isSunny && temp > 20) {
      return "Beautiful weather! Consider scheduling outdoor activities.";
    } else if (temp < 10) {
      return "It's cold outside. Maybe focus on home tasks today.";
    }
    return "Weather looks fine for most activities today.";
  };

  if (loading) {
    return (
      <div className="weather-widget">
        <h3>Weather</h3>
        <div className="weather-loading">Loading weather data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-widget">
        <h3>Weather</h3>
        <div className="weather-error">Unable to load weather data</div>
      </div>
    );
  }

  if (!data || !data.current || !data.location) {
    return (
      <div className="weather-widget">
        <h3>Weather</h3>
        <div className="weather-error">No weather data available</div>
      </div>
    );
  }

  return (
    <div className="weather-widget">
      <h3>Weather</h3>
      <div className="weather-content">
        <div className="weather-location">{data.location.name}, {data.location.country}</div>
        <div className="weather-main">
          <span className="weather-icon">{getWeatherIcon(data.current.condition?.text)}</span>
          <span className="weather-temp">{Math.round(data.current.temp_c)}°C</span>
        </div>
        <div className="weather-condition">{data.current.condition?.text}</div>
        <div className="weather-details">
          <div className="weather-detail">
            <span className="detail-label">Humidity:</span>
            <span className="detail-value">{data.current.humidity}%</span>
          </div>
          <div className="weather-detail">
            <span className="detail-label">Wind:</span>
            <span className="detail-value">{Math.round(data.current.wind_kph)} km/h</span>
          </div>
        </div>
        <div className="weather-suggestion">{getTaskSuggestion()}</div>
      </div>
    </div>
  );
};

export default WeatherWidget;

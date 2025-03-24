import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskInput from './Tasks/TaskInput';
import TaskList from './Tasks/TaskList';
import WeatherWidget from './Weather/WeatherWidget';
import { fetchWeather } from '../redux/Actions/weatherActions';
import './TodoApp.css';

const TodoApp = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { loading, error } = useSelector(state => state.weather);

  useEffect(() => {
    // Get user's location for weather data
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          dispatch(fetchWeather(position.coords.latitude, position.coords.longitude));
        },
        () => {
          // Default to a location if geolocation fails
          dispatch(fetchWeather(40.7128, -74.0060)); // New York coordinates
        }
      );
    } else {
      dispatch(fetchWeather(40.7128, -74.0060)); // New York coordinates
    }
  }, [dispatch]);

  return (
    <div className="todo-app">
      <div className="welcome-header">
        <h1>Welcome, {user?.name || 'User'}!</h1>
        <p>Organize your tasks efficiently</p>
      </div>

      <div className="todo-content">
        <div className="todo-main">
          <TaskInput />
          <TaskList />
        </div>
        <div className="todo-sidebar">
          <WeatherWidget />
        </div>
      </div>

      {error && <div className="error-message">Error loading weather data: {error}</div>}
    </div>
  );
};

export default TodoApp;
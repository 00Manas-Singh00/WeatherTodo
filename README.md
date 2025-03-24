# WeatherTodo - Task Manager with Weather Integration

![Authentication Demo](/public/Auth.png) 
![WeatherToDo Demo](/public/weatherTodo.png) 

A modern task management application integrated with real-time weather information. Built with React, Redux, and WeatherAPI.

## Features

- **User Authentication**
  - Secure login/registration system
  - Session persistence using Redux Persist
  - Demo account available
- **Task Management**
  - Add tasks with priority levels (High/Medium/Low)
  - Mark tasks as complete/incomplete
  - Delete tasks
  - Filter tasks (All/Active/Completed)
  - Priority-based sorting
- **Weather Integration**
  - Automatic location detection
  - Real-time weather data display
  - Weather-based task suggestions
  - Fallback to mock weather data
- **Responsive Design**
  - Mobile-friendly layout
  - Clean and intuitive UI
  - Modern styling with CSS variables
- **State Management**
  - Redux for centralized state
  - Redux Thunk for async operations
  - Persisted authentication state

## Technologies Used

- React 18
- Redux Toolkit
- React Router 6
- Redux Persist
- WeatherAPI
- Geolocation API
- CSS Modules
- PostCSS
- React Icons

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/weathertodo.git
cd weathertodo
```
2. Install dependencies:
```bash
npm install
```
3. Create a .env file in the root directory with your WeatherAPI key:
```bash
REACT_APP_WEATHER_API_KEY=your_api_key_here
```
4. Start the development server:
```bash
npm start
```
## Configuration

### WeatherAPI Setup
1. Obtain a free API key from [weatherapi.com](https://www.weatherapi.com/)
2. Create a `.env` file in the root directory with:
```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```
## Demo Account

| Credential | Value               |
|------------|---------------------|
| Email      | `demo@example.com`  |
| Password   | `password123`       |

## Project Structure

```bash
src/
├── components/          # React components
│   ├── Auth/            # Authentication components
│   ├── Layout/          # Layout components
│   ├── Tasks/           # Task management components
│   └── Weather/         # Weather components
├── redux/               # State management
│   ├── actions/         # Redux actions
│   └── reducers/        # Redux reducers
├── App.css              # Main styles
├── App.js               # Root component
├── index.js             # Entry point
└── index.css            # Base styles
```

a1a69a2b21b44e899c1130301252403
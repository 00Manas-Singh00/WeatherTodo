import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import taskReducer from './Reducers/taskReducers';
import authReducer from './Reducers/authReducers';
import weatherReducer from './Reducers/weatherReducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks', 'auth'] 
};

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
  weather: weatherReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

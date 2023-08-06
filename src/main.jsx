import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import usersReducer from './redux/features/userSlice.js';

// Create redux store at application level.
const store = configureStore({
  reducer: {
    // list of reducers will be added here.
    users: usersReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

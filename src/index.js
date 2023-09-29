// src/index.js or src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your custom styles next
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

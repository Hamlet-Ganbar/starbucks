import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/index.css';
import '../src/Assets/Font.css'
import './Assets/Reset.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

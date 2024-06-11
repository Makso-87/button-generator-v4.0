import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

const rootElement = document.querySelector('#app');
const root = createRoot(rootElement);
root.render(<App />);

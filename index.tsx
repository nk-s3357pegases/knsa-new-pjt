import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AutomationPage from './src/AutomationPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);

// Normaliza o path (remove barra no final)
const pathname = window.location.pathname.replace(/\/+$/, '');
const isAutomationPage = pathname === '/ia-e-automacao';

root.render(
  <React.StrictMode>
    {isAutomationPage ? <AutomationPage /> : <App />}
  </React.StrictMode>
);

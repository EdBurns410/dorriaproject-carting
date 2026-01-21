import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'


// DEBUG: Global Error Handler to see errors on mobile/production
window.onerror = function (msg, url, lineNo, columnNo, error) {
  const div = document.createElement('div');
  div.style.cssText = 'position:fixed;top:0;left:0;background:white;color:red;z-index:9999;padding:20px;width:100vw;height:100vh;overflow:auto;font-size:16px;';
  div.innerHTML = `<h1>Runtime Error</h1><p>${msg}</p><p>${url}:${lineNo}:${columnNo}</p><pre>${error ? error.stack : ''}</pre>`;
  document.body.appendChild(div);
  return false;
};

window.onunhandledrejection = function (event) {
  const div = document.createElement('div');
  div.style.cssText = 'position:fixed;top:0;left:0;background:white;color:red;z-index:9999;padding:20px;width:100vw;height:100vh;overflow:auto;font-size:16px;';
  div.innerHTML = `<h1>Unhandled Rejection</h1><p>${event.reason}</p>`;
  document.body.appendChild(div);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

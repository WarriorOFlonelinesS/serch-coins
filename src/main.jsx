import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CombinedProvider from './components/CombineProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CombinedProvider>
        <App />
    </CombinedProvider>
  </React.StrictMode>
);

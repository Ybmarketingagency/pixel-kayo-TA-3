import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { CartProvider } from './contexts/CartContext.jsx';
import './index.css';

// HashRouter so direct URLs like /over-ons survive a refresh on any host,
// including Lovable's preview/publish infra (which doesn't honour _redirects).
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </HashRouter>
  </React.StrictMode>
);

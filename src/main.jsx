import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';                // ← the only global CSS
// Optional: keep ONLY if you actually use Bootstrap classes
// import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

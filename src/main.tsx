import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Make sure this is imported
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/Store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* Ensure BrowserRouter wraps the App */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

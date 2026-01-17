import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css";

createRoot(document.getElementById('root')).render(<App />);


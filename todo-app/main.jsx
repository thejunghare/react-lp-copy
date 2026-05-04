import { createRoot } from 'react-dom/client';
// import App from './src/App'
import './index.css'
import { AppRouter } from './src/AppRouter';

const root = createRoot(document.getElementById('root'));
root.render(
    //  <App />
    <AppRouter />
);
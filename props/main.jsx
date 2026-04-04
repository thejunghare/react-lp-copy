import { createRoot } from 'react-dom/client';
import Card from './Card';

const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <Card />
    </div>
);

/*
Challenge - create a custom component called Cards that renders a contact card with props like img, name, phone, email.
 */
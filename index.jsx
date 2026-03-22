import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
    <h1>Hello React!</h1>
)

/*
Challenge - recreate the above line of code in vanilla Js by creating and appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child
 */

import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

function MyAwesomeNavbar() {
    return (
        <nav className={"container"}>
            some header frontend
        </nav>
    )
}

/*
challenge:
create your very first custom react component!
call it MainCotent, and have it return a simple
h1 element that says 'React is great!'
Afterward render it on the line below MyAwesomeNavbar
*/


root.render(
    <div>
        <MyAwesomeNavbar/>
    </div>
)

import { useState, useEffect } from 'react'

const App = () => {
    // todo state variable we help us with inserating todos inside the state variable todos -> initial an empty object
    const [todo, setTodo] = useState({
        title: '',
        description: "",
        dateTime: ""
    })

    // todos state variable will contain all our todos -> initial an empty array
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(data);
    }, []);

    const handleAddTodo = (e) => {
        e.preventDefault() //  stop page to refresh 
        // get all the perivous todo from local storage and append users new todo the same 

        // getting all todos
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || []

        // appending to all todos
        const newTodos = [...savedTodos, { ...todo, id: savedTodos.length + 1 }]

        // updating latest todo list
        setTodos(newTodos)
        localStorage.setItem("todos", JSON.stringify(newTodos));

        setTodo({
            title: '',
            description: "",
            dateTime: ""
        })
    }

    return (
        <>
            <form onSubmit={handleAddTodo}>
                <input type="text" placeholder='Learn React' value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
                <input type="text" placeholder='Some description here' value={todo.description} onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
                <input type="datetime-local" value={todo.dateTime} onChange={(e) => setTodo({ ...todo, dateTime: e.target.value })} />
                <button type='submit'>Add todo</button>
            </form>

            {/* Mapping through each array i.e. each todo */}
            <div className="">
                {todos.map((todo) =>
                    <ul>
                        <li key={todo.id}>{todo.title}</li>
                        <button>update</button>
                        <button>delete</button>
                    </ul>
                )}
            </div>
        </>
    )
}

export default App;
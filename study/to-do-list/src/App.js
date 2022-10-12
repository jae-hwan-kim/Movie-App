import React from 'react'; // eslint-disable-line no-unused-vars

function App() {
    const [todo, setTodo] = React.useState("");
    const [todos, setTodos] = React.useState([]);
    const onChange = (event) => setTodo(event.target.value)
    const onSubmit = (event) => {
        event.preventDefault();
        if (todo === "")
            return;
        setTodos((currentArray) => ([todo, ...currentArray]));
        setTodo("");
        console.log(todos);
    };
    return (
        <div>
            <h1>My To Do List ({todos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={todo} type="text" placeholder='To-Do-List' />
                <button>Submit</button>
            </form>
            <hr />
            {todos.map((item, index) => <li key={index}>{ item }</li>)}
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import "./Todos.scss"


function Todos(props) {
    const [todo, setTodo] = useState("")

    const onHandleChange = (event) => {
        setTodo(event.target.value)
    }

    const onHandleSubmit = (event) => {
        // event.preventDefault;

    }

    return (
        <div className="addTodos">
            <input type="text" className="todo-input" onChange={event => onHandleChange(event)}/>
            <button type="submit" className="add-btn" onSubmit={onHandleSubmit}>Add</button>
        </div>
    );
}

export default Todos;
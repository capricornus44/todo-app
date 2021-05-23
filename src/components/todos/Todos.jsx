import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';
import {v4 as uuid} from 'uuid';
import {addNewTodo, deleteTodo, editTodo, getFilterTodos} from "../../redux/store"
import "./Todos.scss"

function Todos(props) {
    const [todo, setTodo] = useState("")
    const inputRef = useRef(true)

    const textAreaChangeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus()
    }

    const edit = (id, value, e) => {
        if (e.which === 13) { // key code of "Enter"
            props.editTodo({id, item: value});
            inputRef.current.disabled = true
        }
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    // console.log(todo)
    // console.log("props from store", props);
    return (
        <div>
            <input type="text" onChange={e => handleChange(e)}/>
            <button onClick={() => props.addNewTodo({
                id: uuid(),
                item: todo,
                completed: false,
            })
            }>Add new task
            </button>

            <ul>
                {props.todos.map(todo => {
                    return <li key={todo.id}>
                        <textarea
                            ref={inputRef}
                            disabled={inputRef}
                            defaultValue={todo.item}
                            onKeyPress={(e) => edit(todo.id, inputRef.current.value, e)}
                        />
                        <button onClick={() => textAreaChangeFocus()}>Edit</button>
                        <button onClick={() => props.deleteTodo(todo.id)}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        filter: state.filter
    }
}

const mapDispatchToProps = {addNewTodo, deleteTodo, editTodo, getFilterTodos}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
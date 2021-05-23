import React, {useState} from 'react';
import {connect} from 'react-redux';
import {v4 as uuid} from 'uuid';
import {addNewTodo, deleteTodo, editTodo, getFilterTodos} from "../../redux/store"
import "./Todos.scss"

function Todos(props) {
    const [todo, setTodo] = useState("")

    const onHandleChange = (e) => {
        setTodo(e.target.value)
    }
    // console.log(todo)
    // console.log("props from store", props);
    return (
        <div>
            <input type="text" onChange={e => onHandleChange(e)}/>
            <button onClick={() => props.addNewTodo({
                id: uuid(),
                item: todo,
                completed: false,
            })
            }>Add new task
            </button>

            {/*Painting of todo list*/}
            <ul>
                {props.todos.map(todo => {
                    return <li key={todo.id}>{todo.item}<button>Edit</button><button onClick={() => props.deleteTodo(todo.id)}>Delete</button></li>
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
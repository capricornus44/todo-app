import React, {useState} from 'react';
import {connect} from "react-redux"
import {v4 as uuid} from 'uuid';
import TodosList from "./todosList/TodosList";
import {addNewTodo, completeTodo, deleteTodo, editTodo} from "../../redux/store";
import "./Todos.scss"

function Todos(props) {
    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

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
            <TodosList/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = {addNewTodo, deleteTodo, editTodo, completeTodo}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
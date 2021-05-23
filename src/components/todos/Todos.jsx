import React, {useState} from 'react';
import {connect} from 'react-redux';
import {v4 as uuid} from 'uuid';
import {addNewTodo, deleteTodo, getFilterTodos} from "../../redux/store"
import "./Todos.scss"

function Todos(props) {
    const [todo, setTodo] = useState("")

    const onHandleChange = (e) => {
        setTodo(e.target.value)
    }
    console.log(todo)
    console.log("props from store", props);
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

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        filter: state.filter
    }
}

const mapDispatchToProps = {addNewTodo, deleteTodo, getFilterTodos}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
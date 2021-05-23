import React, {useState} from 'react';
import {connect} from "react-redux"
import {v4 as uuid} from 'uuid';
import {GoPlus} from "react-icons/go"
import TodosList from "./todosList/TodosList";
import {addNewTodo, completeTodo, deleteTodo, editTodo} from "../../redux/store";
import "./Todos.scss"

function Todos(props) {
    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const add = () => {
        props.addNewTodo({
            id: uuid(),
            item: todo,
            completed: false,
        })
        setTodo("")
    }

    return (
        <>
            <div className="addTodos__box">
                <input type="text" value={todo} onChange={e => handleChange(e)} className="addTodos__input"/>
                <button
                    className="addTodos__btn"
                    onClick={add}
                >
                    <GoPlus />
                </button>
            </div>
            <TodosList/>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = {addNewTodo, deleteTodo, editTodo, completeTodo}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
import React, {useState} from 'react';
import {connect} from "react-redux"
import TodosElement from "../todosElement/TodosElement";
import {addNewTodo, completeTodo, deleteTodo, editTodo, getFilterTodos} from "../../../redux/store";

function TodosList(props) {

    return (
        <div>

            <ul>
                {props.todos.map(todo => {
                    return <TodosElement/>
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

const mapDispatchToProps = {addNewTodo, deleteTodo, editTodo, completeTodo, getFilterTodos}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
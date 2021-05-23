import React, {useState} from 'react';
import {connect} from "react-redux"
import TodosElement from "../todosElement/TodosElement";
import {addNewTodo, completeTodo, deleteTodo, editTodo} from "../../../redux/store";
import "./TodosList.scss"

function TodosList(props) {
    const [sort, setSort] = useState("active")
    return (
        <div className="tasks">
            <div className="tasks__filter">
                <button onClick={() => setSort("active")}>Active</button>
                <button onClick={() => setSort("completed")}>Completed</button>
                <button onClick={() => setSort("all")}>All</button>
            </div>
            <ul className="tasks__list list">
                {props.todos.length > 0 && sort === "active"
                    ? props.todos.map(todo => {
                        return (
                            todo.completed === false &&
                            <TodosElement
                                key={todo.id}
                                todo={todo}
                                deleteTodo={props.deleteTodo}
                                editTodo={props.editTodo}
                                completeTodo={props.completeTodo}
                            />
                        )
                    })
                    : null}

                {props.todos.length > 0 && sort === "completed"
                    ? props.todos.map(todo => {
                        return (
                            todo.completed === true &&
                            <TodosElement
                                key={todo.id}
                                todo={todo}
                                deleteTodo={props.deleteTodo}
                                editTodo={props.editTodo}
                                completeTodo={props.completeTodo}
                            />
                        )
                    })
                    : null}

                {props.todos.length > 0 && sort === "all"
                    ? props.todos.map(todo => {
                        return (
                            <TodosElement
                                key={todo.id}
                                todo={todo}
                                deleteTodo={props.deleteTodo}
                                editTodo={props.editTodo}
                                completeTodo={props.completeTodo}
                            />
                        )
                    })
                    : null}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = {addNewTodo, deleteTodo, editTodo, completeTodo}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
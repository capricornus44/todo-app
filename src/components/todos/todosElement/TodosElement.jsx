import React, {useRef} from 'react';
import "./TodoElement.scss"
import {AiFillEdit, IoCheckmarkDoneSharp, IoClose} from "react-icons/all";

function TodosElement(props) {
    const {todo, editTodo, completeTodo, deleteTodo} = props;
    const inputRef = useRef(true)

    const textAreaChangeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus()
    }

    const edit = (id, value, e) => {
        if (e.which === 13) { // key code of "Enter"
            editTodo({id, item: value});
            inputRef.current.disabled = true
        }
    }

    return (
        <>
            <li key={todo.id} className="tasks__item">
                <textarea
                    className="item__text"
                    ref={inputRef}
                    disabled={inputRef}
                    defaultValue={todo.item}
                    onKeyPress={(e) => edit(todo.id, inputRef.current.value, e)}
                />
                <div className="item__btn-box">
                    <button className="item__btn"  onClick={() => textAreaChangeFocus()}><AiFillEdit/></button>
                    {todo.completed === false && (
                        <button className="item__btn" style={{color: "green"}} onClick={() => completeTodo(todo.id)}><IoCheckmarkDoneSharp/></button>
                    )}
                    <button className="item__btn" style={{color: "red"}} onClick={() => deleteTodo(todo.id)}><IoClose/></button>
                </div>
                {todo.completed && <span className="completed">Done</span>}
            </li>
        </>
    );
}

export default TodosElement;
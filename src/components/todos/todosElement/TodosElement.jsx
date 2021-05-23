import React, {useRef} from 'react';

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
        <div>
            <li key={todo.id}>
                <textarea
                    ref={inputRef}
                    disabled={inputRef}
                    defaultValue={todo.item}
                    onKeyPress={(e) => edit(todo.id, inputRef.current.value, e)}
                />
                <div>
                    <button onClick={() => textAreaChangeFocus()}>Edit</button>
                    <button onClick={() => completeTodo(todo.id)}>Complete</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
                {todo.completed && <span>Done</span>}
            </li>
        </div>
    );
}

export default TodosElement;
import React, {useState} from 'react';
import {connect} from "react-redux"
import {v4 as uuid} from 'uuid';
import {GoPlus} from "react-icons/go"
import {motion} from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodosList from "./todosList/TodosList";
import {addNewTodo, completeTodo, deleteTodo, editTodo} from "../../redux/store";
import "./Todos.scss"

function Todos(props) {
    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const add = () => {
       if(todo === "") {
           toast.error("Enter correct value")
       }else {
           props.addNewTodo({
               id: uuid(),
               item: todo,
               completed: false,
           })
       }
        setTodo("")
    }

    return (
        <>
            <div className="addTodos__box">
                <input type="text" value={todo} onChange={e => handleChange(e)} className="addTodos__input"/>
                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className="addTodos__btn"
                    onClick={add}
                >
                    <GoPlus />
                </motion.button>
            </div>
            <TodosList/>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
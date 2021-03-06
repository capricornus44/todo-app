import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"
import { GoPlus } from "react-icons/go"
import { motion } from "framer-motion"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import TodosList from "./todosList/TodosList"
import TodosFilter from "./todosFilter/TodosFilter"
import { addNewTodo, initializeTodos } from "../../redux/store"
import "./Todos.scss"

function Todos() {
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)
  const filter = useSelector((state) => state.filter)

  useEffect(() => {
    const todosLS = localStorage.getItem("todosLS")
    if (todosLS) {
      dispatch(initializeTodos(JSON.parse(todosLS)))
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem("todosLS", JSON.stringify(todos))
  }, [todos])

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const add = () => {
    if (todo === "") {
      toast.error("Enter correct value")
    } else {
      dispatch(addNewTodo({ id: uuid(), item: todo, completed: false }))
    }
    setTodo("")
  }

  const filteredValues = () => {
    const normalizedFilter = filter.toLowerCase()
    return todos.filter((todo) => todo.item.toLowerCase().includes(normalizedFilter))
  }

  return (
    <>
      <div className="addTodos__box">
        <input type="text" value={todo} onChange={(e) => handleChange(e)} className="addTodos__input" />

        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="addTodos__btn" onClick={add}>
          <GoPlus />
        </motion.button>
      </div>
      {todos.length > 0 && <TodosFilter />}
      <TodosList filteredValues={filteredValues} />
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
  )
}

export default Todos

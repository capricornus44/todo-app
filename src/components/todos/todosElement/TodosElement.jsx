import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import { motion } from "framer-motion"
import { AiFillEdit, IoCheckmarkDoneSharp, IoClose } from "react-icons/all"

import { completeTodo, deleteTodo, editTodo } from "../../../redux/store"
import "./TodosElement.scss"

function TodosElement(props) {
  const { todo } = props
  const inputRef = useRef(true)
  const dispatch = useDispatch()

  const textAreaChangeFocus = () => {
    inputRef.current.disabled = false
    inputRef.current.focus()
  }

  const edit = (id, value, e) => {
    if (e.which === 13) {
      dispatch(editTodo({ id, item: value }))
      inputRef.current.disabled = true
    }
  }

  const remove = () => {
    dispatch(deleteTodo(todo.id))
  }

  const complete = () => {
    dispatch(completeTodo(todo.id))
  }

  return (
    <>
      <motion.li
        initial={{ x: "150vw", transition: { type: "spring", duration: 1.5 } }}
        animate={{ x: "0", transition: { type: "spring", duration: 1.5 } }}
        whileHover={{ scale: 0.9, transition: { type: "spring", duration: 0.25 } }}
        exit={{
          x: "-60vw",
          scale: [1, 0],
          transition: { type: "spring", duration: 0.5, backgroundColor: "rgba(255, 0, 0, 1)" },
        }}
        key={todo.id}
        className="tasks__item"
      >
        <textarea
          className="item__text"
          ref={inputRef}
          disabled={inputRef}
          defaultValue={todo.item}
          onKeyPress={(e) => edit(todo.id, inputRef.current.value, e)}
        />
        <div className="item__btn-box">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="item__btn"
            onClick={() => textAreaChangeFocus()}
          >
            <AiFillEdit />
          </motion.button>

          {todo.completed === false && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="item__btn"
              style={{ color: "green" }}
              onClick={complete}
            >
              <IoCheckmarkDoneSharp />
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="item__btn"
            style={{ color: "red" }}
            onClick={remove}
          >
            <IoClose />
          </motion.button>
        </div>
        {todo.completed && <span className="completed">Done</span>}
      </motion.li>
    </>
  )
}

export default TodosElement

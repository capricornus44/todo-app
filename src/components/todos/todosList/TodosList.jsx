import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import TodosElement from "../todosElement/TodosElement"
import "./TodosList.scss"

function TodosList({ filteredValues }) {
  const [sort, setSort] = useState("active")
  const filteredTodos = filteredValues()

  return (
    <div className="tasks">
      <div className="tasks__filter">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSort("active")}>
          Active
        </motion.button>

        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSort("completed")}>
          Completed
        </motion.button>

        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSort("all")}>
          All
        </motion.button>
      </div>
      <ul className="tasks__list list">
        <AnimatePresence>
          {filteredTodos.length > 0 && sort === "active"
            ? filteredTodos.map((todo) => {
                return todo.completed === false && <TodosElement key={todo.id} todo={todo} />
              })
            : null}

          {filteredTodos.length > 0 && sort === "completed"
            ? filteredTodos.map((todo) => {
                return todo.completed === true && <TodosElement key={todo.id} todo={todo} />
              })
            : null}

          {filteredTodos.length > 0 && sort === "all"
            ? filteredTodos.map((todo) => {
                return <TodosElement key={todo.id} todo={todo} />
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  )
}

export default TodosList

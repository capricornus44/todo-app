import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { filterTodo } from "../../../redux/store"
import "./TodosFilter.scss"

function TodosFilter() {
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const getFilterValue = (event) => {
    dispatch(filterTodo(event))
  }

  return (
    <div className="filter__container">
      <input
        className="filter__input"
        type="text"
        placeholder="Find task"
        value={filter}
        onChange={(e) => getFilterValue(e.target.value)}
      />
    </div>
  )
}

export default TodosFilter

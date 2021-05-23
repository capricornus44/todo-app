import {configureStore, createSlice} from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: {todos: [], filter: ""},
    reducers: {
        addNewTodo: (state, action) => ({
            ...state, todos: [...state.todos, action.payload]
        }),
        deleteTodo: (state, action) => ({
            ...state, todos: [...state.todos.filter(todo => todo.id !== action.payload)]
        }),
        getFilterTodos: (state, action) => ({
            ...state, filter: action.payload
        }),
    }
})

export const {addNewTodo, deleteTodo, getFilterTodos } = todosSlice.actions;

const store = configureStore(todosSlice)

export default store;
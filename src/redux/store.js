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
        editTodo: (state, action) => ({
            ...state, todos: [...state.todos.map(todo => {
                if(todo.id === action.payload.id) {
                    return {...todo, item: action.payload.item}
                }
                return todo
            })]
        }),
        getFilterTodos: (state, action) => ({
            ...state, filter: action.payload
        }),
    }
})

export const {addNewTodo, deleteTodo, editTodo, getFilterTodos } = todosSlice.actions;

const store = configureStore(todosSlice)

export default store;
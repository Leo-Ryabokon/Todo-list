import React, {useState, useEffect} from "react";
import './App.css'
import Form from "./component/Form";
import TodoList from "./component/TodoList";

export const App = () => {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect(()=> {
        GetToLocalStorage()
    }, [])
    useEffect(() => {
        filterHandler()
        saveToLocalStorage()
    }, [todos, status])

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(el => el.completed === true))
                break
            case 'uncompleted':
                setFilteredTodos(todos.filter(el => el.completed === false))
                break
            default:
                setFilteredTodos(todos)
                break
        }
    }

    const saveToLocalStorage = () => {
            localStorage.setItem('todos', JSON.stringify(todos))
    }

    const GetToLocalStorage = () => {
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'))
            setTodos(todoLocal)
        }
    }
    return (
        <div className="App">
            <header>
                <h1>Leo's Todo List</h1>
            </header>
            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} status={status}
                  setStatus={setStatus}/>
            <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        </div>
    )
}


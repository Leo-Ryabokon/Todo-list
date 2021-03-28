import React from 'react'

const Todo = ({ text, todos, setTodos, todo }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completedHandler = () => {
        setTodos(todos.map((el) => {
            if(el.id === todo.id){
                return {...el, completed: !el.completed}
            }
            return el
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button className="complete-btn" onClick={completedHandler}><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo
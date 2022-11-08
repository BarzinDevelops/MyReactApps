import React from "react"

const TodoItem = (props) =>{
    return (
        <div style={{color:'rgba(12, 40, 78, 0.973)'}} className="todo-item">
            <input type="checkbox" checked={props.todoItem.completed}/>
            <p>{props.todoItem.text}</p>
        </div>

    )
}

export default TodoItem
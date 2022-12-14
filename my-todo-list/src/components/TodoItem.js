import React from "react"

const TodoItem = (props) =>{
    return (
        <div style={{color:'rgba(12, 40, 78, 0.973)'}} className="todo-item">
            <input type="checkbox" checked={props.item.completed} 
                onChange={()=> props.handleChange(props.item.id)}/>
            <p className={props.styleCompleted}>{props.item.text}</p>
        </div>

    )
}

export default TodoItem


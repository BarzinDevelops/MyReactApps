import React from "react"
import todosData from '../todosData'

const TodoItem = (props) =>{
    return (
        <div style={{color:'rgba(12, 40, 78, 0.973)'}} className="todo-item">
            <input type="checkbox" checked={props.item.completed} 
                onChange={()=> props.handleChange(props.item.id)}/>

            <p>{props.item.text}</p>
        </div>

    )
}

export default TodoItem


/*
Let's practice props and mapping components on our todo list app!

I've created a js file with some todos data in it, which I'm imported into this file. 
(Normally this data would come from an API call, not a local file). 

Challenge: Using the array map method, render a child component for each todo item 
in the todosData array and pass the relevant data to it.
*/

// ----------------------APP.js  starts here-----------------------------

// import React, { version } from "react"; // to see what react version you use.
import TodoItem from "./TodoItem";
import todosData from "../todosData"

const App = () => {
    const myTodos = todosData.map(todo => <TodoItem key={todo.id} todoItem={todo}/>)
    return (
        <main className="main-wrapper">
            <div className="todo-list">
                {myTodos}
            </div>

        </main>
    )
}

export default App
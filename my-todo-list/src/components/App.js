/* Assignment description:
In the previous iteration of this todo list app, we pulled in todos data 
from a JSON file and mapped over it to display the todo items.

Eventually we'll want to be able to modify the data, which will only happen 
if we've "loaded" the data in to the component's state

Challenge: Change the <App /> component into a stateful class component and 
load the imported `todosData` into state.
*/

// ----------------------APP.js  starts here-----------------------------

// import React, { version } from "react"; // to see what react version you use.
import TodoItem from "./TodoItem";
import todosData from "../todosData";
import React, {Component, component} from 'react';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: todosData.map(todo => <TodoItem key={todo.id} todoItem={todo}/>)
        }
    }

    render() {
        return (
            <main className="main-wrapper">
                <div className="todo-list">
                    {this.state.todoList}
                </div>
    
            </main>
        )
    }
}

export default App
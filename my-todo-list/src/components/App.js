/* Assignment description:

* Challenge: Style the completed todo items differently from the incomplete items.

*/

// ----------------------APP.js  starts here-----------------------------

// import React, { version } from "react"; // to see what react version you use.
import TodoItem from "./TodoItem";
import todosData from "../todosData";
import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(id) {
        // 4. Update state so that the item with the given id flips `completed` from false to true (or vise versa)
        this.setState((prevState)=>{
         const updatedItems = prevState.todos.map(item => {
                if(item.id === id) {
                    return {
                        ...item, //spred operator=> get all props of this object
                        completed: !item.completed  //for prop 'completed' revers the value (if true than false and vice versa)
                    }
                }
                return item
            })
            //checking if prevState isn't changed compare to the update state!
                // console.log('prevState => ',prevState.todos)
                // console.log('updatedItems => ',updatedItems) 
            return {todos:updatedItems}
        })
    }


    render() {
        const TodoItems = this.state.todos.map(item => {
            const completedStyle = item.completed ? "completed-task" : ""
            return <TodoItem 
                key={item.id} 
                item={item} 
                handleChange={this.handleChange}
                styleCompleted = { completedStyle }
            />
        })

        return (
            <main className="main-wrapper">
                <div className="todo-list">
                    {TodoItems}
                </div>
            </main>
        )
    }
}

export default App
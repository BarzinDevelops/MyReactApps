/* Assignment description:

 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments 
 * in the code for some help on accomplishing this one
 * 
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function


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
        const TodoItems = this.state.todos.map(item => 
        <TodoItem 
            key={item.id} 
            item={item} 
            handleChange={this.handleChange}
        />)

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
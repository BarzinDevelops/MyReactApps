/*
Time to have fun styling! But first things first: 

1. Change the input/p combo below to be a new component called <TodoItem />. <TodoItem /> (for now) will just have the same displayed data below (every todo item is the same) hardcoded inside of it. (We'll learn soon how to make the TodoItem more flexible)
    
2. Style up the page however you want! You're welcome to use regular CSS (in the CSS file) or inline styles, or both!
*/

import React from "react"

const App = () => {
    return (
        <div>
            <input type="checkbox" />
            <p>Placeholder text here</p>
            
            <input type="checkbox" />
            <p>Placeholder text here</p>
            
            <input type="checkbox" />
            <p>Placeholder text here</p>
            
            <input type="checkbox" />
            <p>Placeholder text here</p>
        </div>
    )
}

export default App
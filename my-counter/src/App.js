import React, {Component} from 'react';


class App extends Component{
    constructor(){
        super()
        this.state = {
            counter: 0        
        }
        
        this.addOne = this.addOne.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
        this.resetter = this.resetter.bind(this);
    }
    
    
    addOne = () => {
         this.setState(prevState => {
            return { 
                counter: prevState.counter + 1
            }
        }); 
    };
    subtractOne = () => {
        this.setState(prevState => {
            return { 
                counter: prevState.counter - 1
            }
        }); 
    };
    resetter = () => { this.setState({ counter: 0}) };
        

    render() {
       const coloring = (currentValue, operatorType) => {
            if( currentValue > 0) return {color:"green"}
            if( currentValue < 0) return {color:"red"}
        }
        const btnColoring = (currentValue, operatorType) => {
            if( currentValue > 0 && operatorType === 'plus') return {backgroundColor:"green"}
            if( currentValue < 0 && operatorType === 'min') return {backgroundColor:"red"}
        }
        return (
            <div className="main-div">
               <h1 style={coloring(this.state.counter)}>{this.state.counter}</h1>
               <div style={{display: "flex", gap:"10px"}}>
                    <button onClick={this.addOne} style={btnColoring(this.state.counter, "plus")}>Add 1</button> 
                    <button onClick={this.subtractOne} style={btnColoring(this.state.counter, "min")}>Subtract 1</button> 
                    <button onClick={this.resetter} >Reset</button> 
                </div>
            </div>
        )
    }
}

export default App
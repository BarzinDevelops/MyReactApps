import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name] : value

    })
  }

  render(){
    return (
      <div className="main-div">
         <input 
            type="text" 
            placeholder='First Name'
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
         <input 
            type="text" 
            placeholder='Last Name'
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        <h3>{this.state.firstName} {this.state.lastName}</h3>
      </div>
    );
  }


  
}

export default App;

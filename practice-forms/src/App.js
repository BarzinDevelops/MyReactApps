import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      comments: "",
      isFriendly: false,
      isFriendlyText: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ?   
              this.setState({
                [name] :  checked,
                isFriendlyText: checked ?  "I seem to be a friendly person!" : "I seem to be an unfriendly person!"
              }) :  
              this.setState({ [name] :  value })
  }

  render(){
    // console.log(this.state.isFriendly)
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
          <textarea name='comments' value={this.state.comments} onChange={this.handleChange} />

          <div className='is-friendly'>
            <input
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handleChange}
            />
            <span>Are you a friendly person?</span>
          </div>
        <hr style={{width: "40%", margin: "10px 0"}}/>
        <span>Name: {this.state.firstName} {this.state.lastName} </span>
        <span> {this.state.isFriendlyText}</span>
        <span className='comments'>Comments:<br/>&emsp; {this.state.comments}</span>
      </div>
    );
  }


  
}

export default App;

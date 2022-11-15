import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      comments: "",
      isFriendly: false,
      isFriendlyText: "",
      gender: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ?   
              this.setState({
                [name] :  {name} === "isFriendly" && checked,
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

          {/* Using checkbox  */}
          <div className='is-friendly'>
            <input
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handleChange}
            />
            <span>Are you a friendly person?</span>
          </div>

          {/* Using radio btns: */}
          <div className='gender-wrapper'>
           <fieldset>
            <legend>Gender</legend>
            <label className="gender">           
              <input
                  type="radio"
                  name="gender"
                  value='male'
                  checked={this.state.gender === 'male'}
                  onChange={this.handleChange}
              />
            Male
            </label> 

            <label className="gender">
              <input
                type="radio"
                name="gender"
                value='female'
                checked={this.state.gender === 'female'}
                onChange={this.handleChange}
              />
            Female
            </label>
           </fieldset>
          </div>
          

        <hr style={{width: "40%", margin: "10px 0"}}/>

       <fieldset className='results'>
        <legend>Results of filled/chosen fields:</legend>
        <span>
          {this.state.firstName !=="" && this.state.lastName ==="" ? [<span>First Name: </span> ,this.state.firstName] : ""} 
          {this.state.lastName !=="" && this.state.firstName ==="" ? [<span>Last Name: </span> ,this.state.lastName] : ""}
          {this.state.firstName !=="" && this.state.lastName !=="" ? [<span>Full Name: </span> ,this.state.firstName, this.state.lastName] : ""}

        </span>
        <span> {this.state.isFriendlyText}</span>
        <span className='comments'> {this.state.comments !=="" && `Comments:\n\t${this.state.comments}` } </span>
        <span>{this.state.gender !== "" && `Gender: You are a ${this.state.gender}`} </span>
       </fieldset>
      </div>
    );
  }


  
}

export default App;

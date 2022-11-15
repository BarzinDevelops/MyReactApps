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
      gender: "",
      favColor: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ?   
              this.setState({
                [name] :  name === "isFriendly" && checked,
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

          <fieldset>
            <legend>Favorite Color:</legend>
            <div style={{padding: "10px",backgroundColor: this.state.favColor}}>
                <select className='fav-color' style={{padding: "3px"}}
                value={this.state.favColor}
                name="favColor"
                onChange={this.handleChange}
                >
                  <option value="white">--Choose One Color--</option>
                  <option value="lightblue">Light Blue</option>
                  <option value="rgb(19, 121, 107)">Green</option>
                  <option value="rgba(92, 113, 141, 0.986)">Grey Purple</option>
                  <option value="rgb(180, 93, 180)">Light Purple</option>
                  <option value="yellow">Yellow</option>
              </select>
            </div>
          </fieldset>
          
          

        <hr/>

       <fieldset className='results'>
        <legend>Results of filled/chosen fields:</legend>
        <span>
          {this.state.firstName !=="" && this.state.lastName ==="" ? [<span className='result-titles' key={'firstName'}>First Name: </span> ,this.state.firstName] : ""} 
          {this.state.lastName !=="" && this.state.firstName ==="" ? [<span className='result-titles' key={'lastName'}>Last Name: </span> ,this.state.lastName] : ""}
          {this.state.firstName !=="" && this.state.lastName !=="" ? [<span className='result-titles' key={'fullName'}>Full Name: </span> ,this.state.firstName, " ", this.state.lastName] : ""}
        </span>
        <span> {this.state.isFriendlyText !=="" && [<span className='result-titles' key={'friendlyOrNot'}>Friendly or not: </span>,this.state.isFriendlyText]}</span>
        <span> {this.state.comments !=="" && [<span className='result-titles' key={'comments'}>Comments: </span>, this.state.comments]} </span>
        <span>{this.state.gender !== "" && [<span className='result-titles' key={'comments'}>Comments: </span>, this.state.gender]} </span>
       </fieldset>

      </div>
    );
  }


  
}

export default App;

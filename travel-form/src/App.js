
/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
--------------------------------------------------------------------
You just started your own airline, and you need to create a form to collect data about your passengers' upcoming travel plans so they can book their flight.

You should collect the following information from the user:

First name (text input)
Last name (text input)
Age (number input)
Gender (radio buttons with 2 or more options)
Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
Each element of the form should be given a name attribute so you can access the data in JavaScript and do stuff with it.

There should also be a button at the end of the form to submit it.
 */

import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const {name, value, type, checked} = event.target;
    
    type === 'checkbox' ? 
        this.setState({ [name] : checked }) : 
        this.setState({ [name] : value })
  }
  render(){
    return (
      <div className="main-wrapper">
        <h1>Passenger Booking Form:</h1>
        <form className="form-wrapper">
           {/* {/*-------------First Name: {/*-------------*/}
            <input 
              type="text" 
              name="firstName" 
              value={this.state.firstName} 
              placeholder="Your First Name"
              onChange={this.handleChange}
            />
            {/*{/*------------- Last Name: {/*-------------*/}
            <input 
              type="text" 
              name="lastName" 
              value={this.state.lastName} 
              placeholder="Your Last Name"
              onChange={this.handleChange}
            />
            {/*{/*------------- Age:{/*------------- */}

            <input
              type='number'
              name='age'
              placeholder='Your Age'
              value={this.state.age}
              onChange={this.handleChange}
              />

            {/*------------- gender: -------------------*/}

            <fieldset className='results'>
              <legend>Gender</legend>
              <label>
                <input 
                  type="radio" 
                  name="gender" 
                  value= "Male" 
                  checked={this.state.gender === "Male"}
                  onChange={this.handleChange}
                />
                Male
              </label>
              <label>
                <input 
                  type="radio" 
                  name="gender" 
                  value= "Female" 
                  checked={this.state.gender === "Female"}
                  onChange={this.handleChange}
                />
                Female
              </label>
            </fieldset>


            {/*{/*------------- Location: (select boxes with minimum 3 countries){/*-------------*/}





            {/* {/*-------------dietary restrictions (check boxes for vegetarian, kosher, lactose free): {/*-------------*/}


        </form>

        {/*------------- Results of filled in / chosen options:---------*/}
        <fieldset className='results'>
          <legend>Results of filled form:</legend>

          <span>First Name: <b>{this.state.firstName}</b></span>
          <span>Last Name: <b>{this.state.lastName}</b></span>
          <span>Age: <b>{this.state.age}</b></span>
          <span>Chosen Gender: <b>{this.state.gender}</b></span>
        </fieldset>
  
  
      </div>
    );
  }

}

export default App;

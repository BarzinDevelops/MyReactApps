
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
      chosenLocation: "",
      vegetarian: false,
      kosher: false,
      lactoseFree: false,
      
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

            <select className='country-select'
              name="chosenLocation"
              value={this.state.chosenLocation}
              onChange={this.handleChange}>
              <option>✈️Choose a destination✈️</option>
              <option value="prague"> Prague, Czech Republic</option>
              <option value="rome">Rome, Italy</option>
              <option value="santorini">Santorini, Greece</option>
              <option value="paris">Paris, France</option>
            </select>



            {/* {/*-------------dietary restrictions (check boxes for vegetarian, kosher, lactose free): {/*-------------*/}

            <fieldset className='results'>
              <legend>Dietary restrictions:</legend>
              <label>
                <input
                  type="checkbox"
                  name="vegetarian"
                  checked={this.state.vegetarian}
                  onChange={this.handleChange}  
                />
                Vegetarian
              </label>
              <label>
                <input
                  type="checkbox"
                  name="kosher"
                  checked={this.state.kosher}
                  onChange={this.handleChange}  
                />
                kosher
              </label>
              <label>
                <input
                  type="checkbox"
                  name="lactoseFree"
                  checked={this.state.lactoseFree}
                  onChange={this.handleChange}  
                />
                lactoseFree
              </label>

            </fieldset>
        {/* </form> */}

        {/*------------- Results of filled in / chosen options:---------*/}
        
        <fieldset className='results'>
          <legend>Results of filled form:</legend>

          <span>First Name: <b>{this.state.firstName}</b></span>
          <span>Last Name: <b>{this.state.lastName}</b></span>
          <span>Age: <b>{this.state.age}</b></span>
          <span>Chosen Gender: <b>{this.state.gender}</b></span>
          <span>Chosen Destination: <b>{this.state.chosenLocation}</b></span>
          <span>Chosen Dietary: <b>
              {
                [ 
                  this.state.vegetarian && "vegetarian",
                  this.state.kosher && "kosher",
                  this.state.lactoseFree && "lactose free"
                ].filter(element => element ).join(', ')
              }
          </b></span>

        </fieldset>
  
        </form>
      </div>
    );
  }

}

export default App;

import React, {Component} from 'react'
import Header from './Header'


class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText : "",
            randomImg : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({
                    allMemeImgs : response.data.memes
                })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }
    
    render() {
        return(
           <div>
            <form className='meme-form'>
                {
                        /**
                         * Create 2 input fields, one for the topText and one for the bottomText
                         * Remember that these will be "controlled forms", so make sure to add
                         * all the attributes you'll need for that to work
                         */
                }
                <input 
                    type="tenxt"
                    name='topText' 
                    value={this.state.topText} 
                    onChange={this.handleChange}></input>
                <input 
                    type="tenxt"
                    name='bottomText' 
                    value={this.state.bottomText} 
                    onChange={this.handleChange}></input>
            </form>
            <p>{this.state.topText}</p>
            <p>{this.state.bottomText}</p>
           </div>
        )
    }
}

export default MemeGenerator
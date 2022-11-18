import React, {Component} from 'react'
// import Header from './Header'


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
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                // console.log(response.data.memes.length)
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

    handleClick(event){
        event.preventDefault();
        const randomIndex = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randChosenImg = this.state.allMemeImgs[randomIndex].url
        this.setState({ randomImg: randChosenImg})
    }
    
    render() {
        return(
           <div>
            <form className='meme-form'>
                <input 
                    type="tenxt"
                    name='topText' 
                    placeholder='Top Text'
                    value={this.state.topText} 
                    onChange={this.handleChange}
                />
                <input 
                    type="tenxt"
                    name='bottomText' 
                    placeholder='Bottom Text'
                    value={this.state.bottomText} 
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>GEN</button>
            </form>
            <div className='meme'>
                <img src={this.state.randomImg} alt="" />
                <h2 className="top">{this.state.topText}</h2>
                <h2 className="bottom">{this.state.bottomText}</h2>
            </div>
            
           </div>
        )
    }
}

export default MemeGenerator
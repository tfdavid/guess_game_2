import React, { Component } from 'react';
import '../assets/css/game.css'

class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            randomNumber: 0,
            userNumber: '',
            message: '',
            shake: false
        }
    }
    generateRandomNumber(){
        const randNum = Math.floor(Math.random() * 10) +1;
        this.setState({randomNumber:randNum});

    }
    componentDidMount(){
        this.generateRandomNumber();
    }
    resetGame(){
        this.generateRandomNumber();
    }

    makeGuess(e){
        e.preventDefault();
        const { userNumber, randomNumber } = this.state;
        const response= userNumber==randomNumber? 'You Won!' : userNumber<randomNumber ? 'Number is Higher' : 'Number is Lower';
        this.setState( {message: response, userNumber:'', shake:true} )
        setTimeout( ()=>{
            this.setState({shake:false})
        }, 750);
    }

    render(){
        // console.log('State: ', this.state);

        const btnStyle =  {
            margin: '10px 50px'
        }
        const { randomNumber, userNumber, message, shake } = this.state;

        return (
            <div>
                {/* <p>Random Number: {randomNumber}</p> */}
                <div className='row'>
                    <form className='col s6 offset-s3' onSubmit={this.makeGuess.bind(this)}>
                        <div className="row">
                            <div className="input-field">
                                <input className='center-align' onChange={ e=>{this.setState({userNumber: e.target.value})} }value={userNumber} type="number" placeholder="Enter a Number"/>
                            </div>
                        </div>
                        <div className="row center-align">
                            <button style={btnStyle} className="z-depth-4 btn pink lighten-2 pulse">Guess</button>
                            <button style={btnStyle} type='button' onClick={this.resetGame.bind(this)} className=" z-depth-4 btn cyan-accent-2">Reset</button>

                        </div>
                    </form>
                    
                </div>
                <h3 className={`center-align ${shake ? 'shake' : ''}`}>{message}</h3>
                
            </div>
        
        )
    }

}
export default Game;
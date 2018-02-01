import React, { Component } from 'react';
import '../assets/css/game.css';
import History from './history'

class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            randomNumber: 0,
            userNumber: '',
            message: '',
            shake: false,
            status: 'playable',
            guesses: 0,
            lowScore: localStorage.getItem('score') || "Not Set",
            history: []
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
        this.setState({
            userNumber: '',
            message: '',
            shake: false,
            status: 'playable',
            guesses: 0,
            history: []
        })
    }
    checkHighScore(){
        const highScore = localStorage.getItem('score');
        const { guesses } = this.state;

        if(highScore){
            if(guesses < highScore){
                localStorage.setItem('score', guesses);
            }
        }
        else {
            localStorage.setItem('score',guesses);
        }

        this.setState({
            lowScore: localStorage.getItem('score')
        })
       

    }

    makeGuess(e){
        e.preventDefault();
        if(this.state.status ==='won'){
            return;
        }
        const { userNumber, randomNumber, guesses, history } = this.state;
        let status = 'playable';
        const response= userNumber==randomNumber? 'You Won!' : userNumber<randomNumber ? 'Number is Higher' : 'Number is Lower';
        if(response==='You Won!'){
            status="won";
        }
        this.setState( {message: response, userNumber:'', shake:true, status:status, guesses: guesses+1, history:[`${response} than ${userNumber}`, ...history]}, ()=>{
                if(status==='won'){
                    this.checkHighScore();
                }
        } )
        
        setTimeout( ()=>{
            this.setState({shake:false})
        }, 750);
    }

    render(){
        // console.log('State: ', this.state);
        // console.log(this.state.history);

        const btnStyle =  {
            margin: '10px 50px'
        }
        const { randomNumber, userNumber, message, shake, status, guesses, lowScore, history } = this.state;

        return (
            <div>
                {/* <p>Random Number: {randomNumber}</p> */}
                <h5 className='center-align'>Best Score: {lowScore} </h5>
                <div className='row'>
                    <form className='col s6 offset-s3' onSubmit={this.makeGuess.bind(this)}>
                        <div className="row">
                            <div className="input-field">
                                <input className='center-align' onChange={ e=>{this.setState({userNumber: e.target.value})} }value={userNumber} type="number" placeholder="Enter a Number"/>
                            </div>
                        </div>
                        <div className="row center-align">
                            <button style={btnStyle} className="z-depth-4 btn pink lighten-2">Guess</button>
                            <button style={btnStyle} type='button' onClick={this.resetGame.bind(this)} className={`z-depth-4 btn cyan-accent-2 ${status==='won'? 'pulse': ''}`}>Reset</button>

                        </div>
                    </form>
                    
                </div>
                <h4 className='center-align'>Number of Guesses: {guesses}</h4>
                <h3 className={`center-align ${shake ? 'shake' : ''}`}>{message}</h3>
                <History data={history}/>
            </div>
        
        )
    }

}
export default Game;
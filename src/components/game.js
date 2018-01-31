import React, { Component } from 'react';

class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            randomNumber: 0,
            userNumber: '',
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
        console.log('UserNum: ', this.state.userNumber);
        
    }

    render(){
        // console.log('State: ', this.state);

        const btnStyle =  {
            margin: '10px 50px'
        }
        const { randomNumber, userNumber } = this.state;

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
                
            </div>
        
        )
    }

}
export default Game;
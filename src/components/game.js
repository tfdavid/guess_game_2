import React, { Component } from 'react';

class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            randomNumber: 0
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
    render(){
        console.log('State: ', this.state);
        const { randomNumber } = this.state;

        return (
            <div>
                <p>Random Number: {randomNumber}</p>
                <button onClick={this.resetGame.bind(this)} className="circle z-depth-5 btn cyan-accent-2 pulse">Reset</button>
            </div>
        
        )
    }

}
export default Game;
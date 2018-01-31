
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Game from './game'


const stylin={
    color: 'teal'
}
const App = () => (
    <div className='container'>
        
        <h1 style={stylin} className='center-align'>Guessing Game</h1>
        <Game/>
    </div>
   
);

export default App;



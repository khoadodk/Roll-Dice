import React from 'react';
import './Dice.css';

class Dice extends React.Component{
    render(){
        return <i className ={`Dice fas fa-dice-${this.props.face}`}></i>
            
        
    }
}

export default Dice;
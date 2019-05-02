import React from 'react';
import Dice from './Dice';
import './RollDice.css';

class RollDice extends React.Component{
    static defaultProps = {
        sides: ['one','two','three','four','five','six']
    };
    constructor(props){
        super(props);
        this.state = {dice1: 'one',dice2: 'two'}
        this.roll = this.roll.bind(this);
        }
    roll(){
        const newdice1 = this.props.sides[Math.floor(Math.random() *this.props.sides.length)];
        const newdice2 = this.props.sides[Math.floor(Math.random() *this.props.sides.length)];
        this.setState({dice1: newdice1, dice2: newdice2, rolling: true});
    
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
    }    
    render() {
            return(
                <div className='RollDice'>
                    <div className="RollDice-container">
                        <Dice face={this.state.dice1} />
                        <Dice face={this.state.dice2} />
                    </div>
                    <button onClick ={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                    </button>
                </div>
            )
        }
    }


export default RollDice;
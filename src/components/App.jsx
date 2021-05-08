import React, { Component } from 'react';
import Numbers from './Numbers'
import Methods from './Methods'

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            current:0,
            method:"",
            value: ""
        }
        this.value = 0
        this.handleClick = this.handleClick.bind(this);
        this.handleClickNumber = this.handleClickNumber.bind(this)
    }
    handleClickNumber(e){
        this.setState({value: this.state.value + e.target.value})
    }

    handleClick(e){
        this.value = parseInt(this.state.value)
        this.setState({value:""})
        if(!this.state.current){this.setState({current: this.value})}
        this.setState({method: e.target.value})
        this.evalOperation()
    }

    evalOperation(){
        switch (this.state.method) {
            case "+":
                this.sum()
                break;
            case "-":
                this.extract()
                break;
            case "/":
            this.divide()
                break;
            case "*":
            this.multiply()
                break;

            default:
                break;
        }
    }
    
    sum(){this.setState({current: this.state.current + this.value})}

    extract(){this.setState({current: this.state.current - this.value})}

    divide(){this.setState({current: this.state.current / this.value})}

    multiply(){this.setState({current: this.state.current * this.value})}


    render(){
        return(
            <div className="calculator">
                <h1>Current Result: {this.state.current}</h1>
                <h2>Input: {this.state.value}</h2>
                <Numbers event={this.handleClickNumber}/>
                <Methods event={this.handleClick}/>
            </div>
        )
    }
}
export default App;
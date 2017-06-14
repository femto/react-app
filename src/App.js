import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class Draw extends Component {
    constructor() {
        super();
        //this.draw = draw.bind(this);
    }
    draw(e) {
        var args = Array.prototype.slice.call(arguments);
        console.log(args);
        console.log(e.target);
        console.log(this);
        //var a1=ReactDOM.findDOMNode(Lottery);
        var a2=ReactDOM.findDOMNode("Lottery");
        //console.log(a1);
        console.log(a2);
    }
    render() {
        return <button onClick={this.draw.bind(this)}>Draw!</button>
    }
}

class Lottery extends Component {
    //constructor() {
    //  super();
    //  this.props = {};
    //  this.props.txt = "321";
    //}
    render() {
        let lines = this.props.lines;
        let index = Math.floor(Math.random(lines.length) * 3)
        return <h1 title={lines[index]} more={5}>{lines[index]}</h1>
    }
}
Lottery.defaultProps = {
    txt: "this is the default txt"
}

class App extends Component {
    render() {
        return       (
            <div>
                <Draw />
                <Lottery lines={["Happy new year","Merry Christmas","Better than never"]}/>
            </div>
        );
    }
}

export default App;
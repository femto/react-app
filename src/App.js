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
    constructor(props) {
     super(props);


     this.state = {};
     this.shuffle();
     // let lines = props.lines;
     // let index = Math.floor(Math.random(lines.length) * 3)
     // this.state.line = lines[index]

     }
     shuffle() {
         let lines = this.props.lines;
         let index = Math.floor(Math.random(lines.length) * 3)
         this.setState({line:lines[index]})
         //this.state.line = lines[index]
     }
    componentDidMount() {
       console.log("mount")
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log("unmount")
        clearInterval(this.timerID);
    }
    tick() {
        console.log("tick")
        this.shuffle();
    }
    render() {
        //this.state = this.props;
        //let lines = this.state.lines;
        //let index = Math.floor(Math.random(lines.length) * 3)
        return <h1 title={this.state.line} more={5}>{this.state.line}</h1>
    }
}
Lottery.defaultProps = {
    txt: "this is the default txt"
}

class App extends Component {
    render() {
        let lines = ["Happy new year","Merry Christmas","Better than never"]
        return       (
            <div>
                <Draw />

                <Lottery lines={lines}/>
            </div>
        );
    }
}

export default App;

import React, { Component } from "react";
import '../App.css';
class DashBoard extends Component{
  constructor(){
    super();
    this.state={
      change:true,
    };
  }
  render(){
    const { change } = this.state;

    return(
      <div>
        <header>
        <div className="App-input">
         <input type="radio"  name="component" defaultChecked={change} onClick={() => this.setState({change: true})}/><label>Class</label>
        <input type="radio"  name="component" defaultChecked={!change} onClick={() => this.setState({change: false})}/><label>Function</label>
      </div>
        </header>
      </div>
    );
  }
}
export default DashBoard;
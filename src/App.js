//import React,{useState} from 'react';
import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DashBoard from "./DashBoard";
import NoMatch from "./NoMatch";
import ClassBase from "./classBase";
import ViewPost from "./ViewPost";

class App extends Component {
  constructor() {
    super();
    this.state = {
      change: true,
    };
  }
  render() {
    const{posts}=this.state;
    console.log(posts);
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/posts">Post</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <DashBoard />
            </Route>
            <Route exact path="/posts">
              <ClassBase />
            </Route>
            <Route exact path="/posts/:id" component={ViewPost} />
            {/*<Route path="/will-match">
            <WillMatch />
          </Route> */}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// function App(){
//   const [change, setChange] = useState(true);
//   console.log(change);
//   render(){
//     const { change } = Posts;
//   return (
//     <div className="App">
//             <header className="App-header">
//                <div className="App-input">
//                <input type="radio"  name="component"  defaultChecked={change} onClick={() => setChange(true)}/> 
//                 <label> Class base </label> 
//                <div>
//                <input type="radio"  name="component" defaultChecked={!change} onClick={() => setChange(false)}/> 
//               <label> Function base </label></div>
//                </div>
//            </header>
//           {
//             change?<ClassBase></ClassBase> : <FunctionBase></FunctionBase>
//           }
//       </div>
//   );
// }
// }


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { change: true , favoritecolor: "red"};
//   }
//   render() {
//     const { change } = this.state;
//     console.log(change);
//     return (
//       <div className="App">
//             <header className="App-header">
//                <div className="App-input">
//                <input type="radio"  name="component"  defaultChecked={change} onClick={() => this.setState({change: true})}/> 
//                 <label> Class base </label> 
//                <div>
//                <input type="radio"  name="component" defaultChecked={!change} onClick={() => this.setState({change: false})}/> 
//               <label> Function base </label></div>
//                </div>
//            </header>
//            {
//             change?<ClassBase></ClassBase> : <FunctionBase></FunctionBase>
//           }
//       </div>
//     );
//   }
// }

export default App;
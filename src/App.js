import React, {Component} from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class App extends Component{
    render(){
        return (
         <HashRouter>
             <div>
                <h1>Yang Li's React Website</h1>
                <ul className="header">
                    <h2><NavLink exact to="/">Home</NavLink></h2>
                    <h2><NavLink to="/role">My Role</NavLink></h2>
                    <h2><NavLink to="/contact">Contact</NavLink></h2>
                </ul>
                <div className="content">
                 <Route exact path="/" component={Home}/>
                 <Route path="/role" component={Stuff}/>
                 <Route path="/contact" component={Contact}/>
                </div>
            </div>
         </HashRouter>
        );
    }
}
export default App;

//The HashRouter component provides the foundation for the navigation and browser history handling that routing is made up of.
//NavLink component with a "to" property and URL value, define the router we are navigating to
//Route component match the URL value with the content components
//path for loading our Home component is /. Our Stuff and Contact components have the / character
// as part of their paths as well. This means our Home component always matches whatever path we are trying to navigate to.
// The fix for that is simple. In the Route component representing our home content
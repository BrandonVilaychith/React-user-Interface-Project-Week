import React, { Component } from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Footer from "./Footer";
class Main extends Component {
  render() {
    return (
    <HashRouter>
        <React.Fragment>
            <Navigation/>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/services" component={Services}/>
                <Route path="/contact" component={Contact}/>
            </div>
            <Footer/>
            <script src="../src/Functionality.js"></script>
        </React.Fragment>
    </HashRouter>
    );
  }
}
 
export default Main;
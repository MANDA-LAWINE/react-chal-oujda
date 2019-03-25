import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import "./App.css";

import navList from "mocks/navList";
import footerLinks from "mocks/footerLinks";

import Header from "common/Header";
import Footer from "common/Footer";
import Home from "pages/Home";
import Contact from "pages/Contact";
import About from "pages/About";
import NotFound from "pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Header appTitle="Abazine Company" navLinks={navList} />
        <div className="container">
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about-us" component={About} />
            <Route component={NotFound} />
          </Switch>
          <Footer
            features={footerLinks.features}
            resources={footerLinks.resources}
            abouts={footerLinks.abouts}
          />
        </div>
      </Router>
    );
  }
}

export default App;

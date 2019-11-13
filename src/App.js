import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./containers/Layout/Header/Header";
import Homepage from "./containers/Homepage/Homepage";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="">
          <Header />
          <Route path="/" exact component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;

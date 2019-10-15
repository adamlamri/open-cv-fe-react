import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import Login from './container/login/Login';

class CV extends React.Component {

  render()  {
    return  (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Login} />
          </div>
        </BrowserRouter>
    );
  }
}

export default CV;
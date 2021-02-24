// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Global from './styles/global'
import Header from './components/navBar/navBar'
import React, { Component } from 'react';

export default class App extends Component {
  
  render() {
    return (
      <div>
          <Global/>
          <Header/>
  
      </div>
    );
  }
}
    
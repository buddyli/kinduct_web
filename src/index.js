import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import './index.css';
import Athletes from './components/athletes';
import Create from './components/create';
import Update from './components/update';
import Upload from './components/upload';

ReactDOM.render(
    <HashRouter>
      <div>
        <ul className="top_banner"><li></li></ul>
        <ul className="header">
          <li><NavLink exact to="/">Athletes</NavLink></li>
          <li><NavLink to="/upload">Upload Athletes</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path='/' component={Athletes} />
          <Route path='/create' component={Create} />
          <Route path='/update/:id' component={Update} />
          <Route path='/upload' component={Upload} />
        </div>
      </div>
    </HashRouter>,
  document.getElementById('root')
);
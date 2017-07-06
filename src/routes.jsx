import React from 'react';
import path from 'path';
import ReadingView from './ReadingView';
import Homepage from './Homepage';
import App from './App';
import { Route } from 'react-router-dom';

const routes = (
  <div>
    <Route exact path='/' component={App} />
    <Route path='/read' component={App} />
  </div>
);

export default routes;

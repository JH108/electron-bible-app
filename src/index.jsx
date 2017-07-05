import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes.jsx';

require('./styles.css');

render(<Router history={browserHistory} children={routes}></Router>, document.getElementById('app'));
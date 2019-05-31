import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import allReducers from './reducers';


const store = createStore(allReducers);

ReactDOM.render(<h2>Hey now</h2>, document.getElementById('root'));

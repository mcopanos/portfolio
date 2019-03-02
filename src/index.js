import React from 'react';
import 'typeface-roboto';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Layout from './Layout';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';




ReactDOM.render(
    <BrowserRouter><Layout /></BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//es6
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require("Countdown");

//load foundation-sites

require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// App css and sass loader

require('style!css!sass!applicationStyles')
ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Main}>

        <Route path="countdown" component ={Countdown}/>

        <IndexRoute  component ={Timer}/>


    </Route>

</Router>, document.getElementById('app'));

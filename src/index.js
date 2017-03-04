import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import Donors from './components/donors';
import TableCrime from './components/MainCrime'
// import Donor from './components/donor_detail'
import NestedAbout from './components/aboutnestedroute';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// import Nav from './components/nav.js';
// import ReactRouter from 'react-router';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render((
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/login" component={Login}></Route>
               
               
               <Route path="/home" component={Home}>
                    <Route path="signup" component={SignUp}></Route>
                    <Route path="login" component={Login}></Route>
                 </Route>

                <Route path="/" component={Home}>
                    <IndexRoute component={TableCrime} />
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
),
    document.getElementById('root')
);

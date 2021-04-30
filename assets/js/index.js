import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime'


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import store from "./store";

import Home from './Componet/Home/Home';
import Login from './Componet/Login/Login';
import Register from './Componet/Register/Register';
import Header from './Componet/Layouts/Header/Header';
import UserDashboard from './Componet/Books/UserDashboard';
import AddBook from './Componet/Books/AddBooks';
import { loadUser } from './Redux/Action/userAction';
import EditBook from './Componet/Books/EditBook';

const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
    transition: transitions.SCALE,
};

const App = () => {
    // useEffect(() => {
    //     store.dispatch(loadUser())
    // })
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container container-fluid">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} exact />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/user/dashboard" component={UserDashboard} />
                        <Route exact path="/user/add-book" component={AddBook} />
                        <Route exact path="/user/edit/:id" component={EditBook} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App

ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </Provider>,
    document.getElementById('react-app')
)
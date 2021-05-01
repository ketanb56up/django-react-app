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
import ProtectedRoute from "./routes/ProtectedRoute"
const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
    transition: transitions.SCALE,
};

const { user } = useSelector(state => state.users)
const token = user?.access
{ token ? true : false }
const App = () => {

    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container container-fluid">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} exact />

                        <ProtectedRoute exact path="/register" component={Register} />
                        <ProtectedRoute exact path="/user/dashboard" component={UserDashboard} />
                        <ProtectedRoute exact path="/user/add-book" component={AddBook} />
                        <ProtectedRoute exact path="/user/edit/:id" component={EditBook} />
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
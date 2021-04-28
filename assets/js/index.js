import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Componet/Login/Login';
import Register from './Componet/Register/Register';
import Header from './Componet/Layouts/Header/Header';
import Home from './Componet/Home/Home';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container container-fluid">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('react-app'));
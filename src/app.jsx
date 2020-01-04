import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import ActivePage from './views/ActivePage';

const App = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/active" component={ActivePage} />
                <Route render={() => <p>Not found</p>} />
            </Switch>
        </BrowserRouter>
    )
};

ReactDOM.render(
    <App/>,
    document.getElementById('root'));
import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Index from '../Component/index.jsx'; //
import HelpCenter from '../Component/helpCenter.jsx'; //

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={Index} />//首页
            <Route path="index" component={Index} />
            <Route path="helpCenter" component={HelpCenter}/>
        </Route>
    </Router>
);

export default RouteConfig;
import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Splash from './components/splash';
import MUD from './components/mud';
import STORE, { IdleStore } from './stores';

class App extends Component {
	STORE = STORE;
	IdleStore = IdleStore;
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={Splash} />
					<Route exact path="/mud" component={MUD} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);

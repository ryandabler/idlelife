import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';
import GardenPanel from './components/panels/garden-panel';
import GermanPanel from './components/panels/german-panel';
import TextPanel from './components/panels/text-panel';
import IdlePanel from './components/panels/idle-panel';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Switch>
						<Route exact path="/" render={() => ([
							<IdlePanel key="idlepanel" />,
							<GardenPanel key="gardenpanel" />,
							<TextPanel key="textpanel" />,
							<GermanPanel key="germanpanel" />
						])} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

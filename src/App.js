import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Header from './components/header';
import GardenPanel from './components/panels/garden-panel';
import GermanPanel from './components/panels/german-panel';
import TextPanel from './components/panels/text-panel';
import IdlePanel from './components/panels/idle-panel';
import Splash from './components/splash';

class App extends Component {
	render() {
		const { location: { pathname } } = this.props;
		const className = pathname.slice(1);

		return (
			<div className={`App ${className || 'home'}`}>
				<Header />
				<Switch>
					<Route exact path="/" component={Splash} />
					<Route exact path="/world" render={() => ([
						<IdlePanel key="idlepanel" />,
						<GardenPanel key="gardenpanel" />,
						<TextPanel key="textpanel" />,
						<GermanPanel key="germanpanel" />
					])} />
				</Switch>
			</div>
		);
	}
}

export default App;

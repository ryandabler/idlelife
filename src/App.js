import React, { Component } from 'react';
import Header from './components/header';
import GardenPanel from './components/panels/garden-panel';
import GermanPanel from './components/panels/german-panel';
import TextPanel from './components/panels/text-panel';
import IdlePanel from './components/panels/idle-panel';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<IdlePanel />
				<GardenPanel />
				<TextPanel />
				<GermanPanel />
			</div>
		);
	}
}

export default App;

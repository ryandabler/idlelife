import React, { Component } from 'react';
import { addToDatabase, getFromDatabase } from '../utilities/indexeddb';

class Splash extends Component {
    static displayName = 'Splash';

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e) {
        e.preventDefault();
        const { target } = e;
        const userName = target.name.value;
        if (!userName) return;

        const notInDatabase = !(await getFromDatabase('users', userName));
        if (notInDatabase) addToDatabase('users', { userName });
        this.props.history.push('/world');
    }

	render() {
		return (
			<div className="splash">
                <h1 className="idlelife">IdleLife</h1>
                <form onSubmit={this.onSubmit} className="login-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                    <input type="submit" value="Login" />
                </form>
			</div>
		);
	}
}

export default Splash;

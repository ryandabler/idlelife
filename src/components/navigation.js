import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

const routes = [
    { to: '/world', label: 'World'},
    { to: '/profile', label: 'Profile'},
    { to: '/quests', label: 'Quests'},
    { to: '/settings', label: 'Settings'}
];

class Navigation extends Component {
    static displayName = 'Navigation';

	render() {
        const { location: { pathname } } = this.props;

		return (
            <nav className="navigation">
                { routes.map(({ to, label }) =>
                    <Link key={to} className={`plain-link ${to === pathname ? 'path-match' : ''}`} to={to}>{label}</Link>
                )}
            </nav>
		);
	}
}

export default withRouter(Navigation);
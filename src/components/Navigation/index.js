import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.css';

class Navigation extends React.Component {

	render() {
		return (
			<nav className={s.nav}>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</nav>
		);
	}

}

export default Navigation;

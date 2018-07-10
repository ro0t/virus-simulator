import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Navigation component example
import Navigation from '../components/Navigation';

// Import pages
import IndexPage from '../pages/IndexPage';
import AboutPage from '../pages/AboutPage';

class AppContainer extends React.Component {

	render() {
		return (
			<div>

				<Navigation />

				<Switch>
					<Route exact path="/" component={IndexPage} />
					<Route exact path="/about" component={AboutPage} />
				</Switch>

			</div>
		);
	}

}

export default AppContainer;

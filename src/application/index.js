import React from 'react';
import styled from 'styled-components';

const GAME_WIDTH = 600;
const GAME_HEIGHT = 600;

const GameScreen = styled.div`
	width: ${GAME_WIDTH}px;
	height: ${GAME_HEIGHT}px;
	background: #fbfbfb;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 0 0 100px rgba(0,0,0,.1);
`;

const Atom = styled.div`
	font: consolas;
	display: block;
	position: absolute;
	width: ${GAME_WIDTH * 0.02}px;
	height: ${GAME_HEIGHT * 0.02}px;
	color: green;
	left: 10px;
	top: 10px;
	font-size: ${GAME_HEIGHT * 0.04}px;
	z-index: 2;
`;

let atoms = [];

class AppContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			atom: 0
		}
	}

	componentDidMount() {
		this.setState(state => {
			state.atom++;
		});

		//atoms[] = new Atom();
	}

	render() {

		const { cycle } = this.props;

		return (
			<div>
				<GameScreen>
					<Atom>@</Atom>
				</GameScreen>
				<span>Cycle: {cycle}</span>
			</div>
		);
	}

}

export default AppContainer;

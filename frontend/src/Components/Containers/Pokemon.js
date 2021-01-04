import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Card, Button } from 'react-bootstrap';
import Transition from 'react-transition-group/Transition';

import StatChart from './Stats/StatChart.js';

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

const duration = 300;
const Images = [Image0, Image1, Image2];

const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0
};

const transitionStyles = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0.9 },
	exited: { opacity: 0.01 }
};

const Fade = ({ in: inProp, currentImage }) => (
	<Transition in={inProp} timeout={duration}>
		{(state) => (
			<div
				style={{
					...defaultStyle,
					...transitionStyles[state]
				}}
			>
				<img src={currentImage} />
			</div>
		)}
	</Transition>
);

class Pokemon extends Component {
	state = {
		msg: null
	};

	componentDidUpdate(prevProps) {
		const { errorReducer } = this.props;
		if (errorReducer !== prevProps.errorReducer) {
			// Check for delete error
			if (errorReducer.id === 'RELEASE_FAIL') {
				this.setState({ msg: errorReducer.msg });
			} else {
				this.setState({ msg: null });
			}
		}
	}

	render() {
		// const { isAuth, user } = this.props.authReducer;
		return (
			<div className="pokemon">
				{this.state.msg ? <Alert color="danger">{this.state.msg.msg}</Alert> : null}
				<Card
					className="pokemonCard"
					border="dark"
					style={{
						height: '260px',
						width: '300px',
						padding: '5px',
						margin: '6px',
						display: 'inline-block'
					}}
				>
					<Card.Img
						variant="top"
						src={this.props.pokemon.sprites[0]}
						style={{
							maxWidth: '8rem',
							maxHeight: '8rem',
							margin: '0 auto',
							display: 'inline-block'
						}}
					/>
					<Card.Img
						variant="top"
						src={this.props.pokemon.sprites[1]}
						style={{
							maxWidth: '8rem',
							maxHeight: '8rem',
							margin: '0 auto',
							display: 'inline-block'
						}}
					/>
					<Card.Body>
						<Card.Title
							className="pokemonName"
							style={{
								margin: '0 auto'
							}}
						>
							#{this.props.pokemon.id} {this.props.pokemon.name.capitalize()}
						</Card.Title>
					</Card.Body>
					<Button
						className="removeButton"
						variant="danger"
						onClick={this.props.onDelete}
						style={{
							maxWidth: 'fit-content',
							maxHeight: 'fit-content',
							display: 'block',
							position: 'absolute',
							bottom: '10px',
							right: '10px'
						}}
					>
						Remove from team
					</Button>
				</Card>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	authReducer: state.authReducer,
	errorReducer: state.errorReducer
});

/*
const mapDispatchToProps = (dispatch) => {
  return {
    addToTeam: (username, pokemon) => dispatch(addToTeam(username, pokemon))
  };
};
*/

export default connect(mapStateToProps, null)(Pokemon);

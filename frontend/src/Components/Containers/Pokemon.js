import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Card, Button } from 'react-bootstrap';
import ReactApexChart from 'apexcharts';
import Transition from 'react-transition-group/Transition';

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

const duration = 300;

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
		msg: null,
		series: [
			{
				name: 'HP',
				data: [this.props.pokemon.stats[0]]
			},
			{
				name: 'Attack',
				data: [this.props.pokemon.stats[1]]
			},
			{
				name: 'Defense',
				data: [this.props.pokemon.stats[2]]
			},
			{
				name: 'Special Attack',
				data: [this.props.pokemon.stats[3]]
			},
			{
				name: 'Special Defense',
				data: [this.props.pokemon.stats[4]]
			},
			{
				name: 'Speed',
				data: [this.props.pokemon.stats[5]]
			}
		],
		options: {
			chart: {
				type: 'bar',
				stacked: true,
				height: 275,
				width: 50
			},
			plotOptions: {
				bar: {
					horizontal: true
				}
			},
			stroke: {
				width: 1,
				colors: ['#fff']
			},
			title: {
				text: `${this.props.pokemon.name}'s Stats`
			},
			xaxis: {
				labels: {
					formatter: function(val) {
						return val;
					}
				}
			},
			yaxis: {
				title: {
					text: undefined
				}
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return val;
					}
				}
			},
			fill: {
				opacity: 1
			},
			legend: {
				position: 'top',
				horizontalAlign: 'left',
				offsetX: 40
			}
		}
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
						height: '310px',
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
						Remove from Team
					</Button>
					<ReactApexChart options={this.state.options} series={this.state.series} type="bar" />
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

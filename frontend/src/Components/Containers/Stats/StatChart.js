import React, { Component } from 'react';
import ReactApexChart from 'apexcharts';
import { connect } from 'react-redux';

class StatChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
					categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
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
	}

	render() {
		return (
			<div>
				<ReactApexChart options={this.state.options} series={this.state.series} type="bar" />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	authReducer: state.authReducer,
	errorReducer: state.errorReducer
});

export default connect(mapStateToProps, null)(StatChart);

import React from 'react';
import ReactApexChart from 'apexcharts';
import PropTypes from 'prop-types';

class StatChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					name: 'Stats',
					data: [this.props.pokemon.stats]
				}
			],
			options: {
				chart: {
					type: 'bar',
					stacked: true
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
				}
			}
		};
	}

	render() {
		return;
		<div>
			<ReactApexChart
				options={this.state.options}
				series={this.state.series}
				type="bar"
				height={this.props.pokemon.stats.reduce((a, b) => a + b, 0)}
			/>
		</div>;
	}
}

StatChart.propTypes = {};

export default StatChart;

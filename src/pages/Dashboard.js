import React, { Component } from 'react';
import CardUI from '../components/UI/Card';

export default class Dashboard extends Component {
	render() {
		return (
			<>
				<CardUI logo={this.props.icon} heading={this.props.heading} color={"md-white"}>
					Welcome Admin
				</CardUI>
			</>
		);
	}
}

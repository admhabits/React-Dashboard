import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<div>
				<NavLink activeClassName='selected' to={"/users/home"}>Home</NavLink>
				<NavLink to={"/users/profile"}>Profile</NavLink>
			</div>
		);
	}
}

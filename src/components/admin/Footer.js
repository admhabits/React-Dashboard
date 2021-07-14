import React, { Component } from 'react';
import '../../assets/css/footer-admin.css';

export default class Footer extends Component {
	constructor({children}){
		super();
		this.foo = children;
	}
	render() {
		return (
			<div className="footer-admin">
			  	<div className="items-foo">
			  		{this.foo}
			  	</div>
			</div>
		);
	}
}

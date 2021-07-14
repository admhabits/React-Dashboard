import React, { Component } from 'react';
import '../../assets/css/content-admin.css';

export default class Content extends Component {

	constructor({children, gaya}){
		super();
		this.content = children;
		this.gaya = gaya;
	
	}


	render() {
					 
		return (
			<div className="content-admin container-shadow" style={this.gaya} id="content-admin">
				<div className="content-admin-wrapper">
					{this.content}
				</div>
			</div>
		);
	}
}


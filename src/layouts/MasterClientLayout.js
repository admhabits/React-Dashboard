import React, { Component } from 'react';

export default class MasterClientLayout extends Component {
	constructor({children}){
		super();
		this.contentClient = children;
	}
	render() {
		return (
			<div>
				{
					this.contentClient
				}
			</div>
		);
	}
}

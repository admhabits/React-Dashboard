import React, { Component } from 'react';
import HeaderClient from '../components/client/Header';

export default class MasterClientLayout extends Component {
	constructor({children}){
		super();
		this.contentClient = children;
	}
	render() {
		return (
			<div>
				<HeaderClient/>
				{
					this.contentClient
				}
			</div>
		);
	}
}

import React, { Component } from 'react';
import '../../assets/css/card.css';

export default class Card extends Component {
	constructor({children, logo, color, heading}){
		super();
		this.children = children;
		this.logo = logo;
		this.color = color;
		this.heading = heading
	}
	render() {
		return (
			<>
				<div id="admin_wrapper">
					<div className={"card-master-header"}>
						{this.heading}
						<span className={`material-icons ${this.color}`}>{this.logo}</span>
					</div>
					<div className="card-master-body">
						{this.children}
					</div>
				</div>
				
			</>
		);
	}
}

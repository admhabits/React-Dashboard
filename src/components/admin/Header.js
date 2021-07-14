import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/header-admin.css';
// import admin from "../../assets/images/admin.png";


export default class Header extends Component {
	constructor(){
		super();
		this.state = {
			toggle: true,
		}

	}


	toggleFunc(){
		const master = document.getElementById('admin-sidebar');
		if(this.state.toggle === true){
			master.style.width = "52px";
		
		} else {
			master.style.width = "200px";
		}
		
		this.setState({
			toggle : !this.state.toggle,

		})
	}

	componentDidMount() {
		// const slim = document.getElementById('slim-panel');
		this.toggleFunc();
		
	}
	
	render() {

		return (
			<div className="header-admin" id="header-admin">

				<div className="brand">
					{/*<img src={admin} alt="logo" id="logo" />*/}
					<div className="name-brand" id="namebrand">Pref Stack Admin</div>
					<span 
					onClick={this.toggleFunc.bind(this)}
					className="material-icons md-26 md-light" 
					id="slim-panel">double_arrow</span>
				</div>

				<div className='spacer'>
					<input type="text" className="search-bar" placeholder="Search Tables..."/>
				</div>

				<div className="navbar">
						
					<Link  className="nav" to={"/admin/dashboard/main"}>
						<i className="material-icons md-26 md-light navbar">dashboard</i>
							Dashboard
					</Link>

					
					<Link className="nav"  to={"/admin/dashboard/notif"}>
						<i className="material-icons md-34 md-light navbar">circle_notifications</i>
						Notification
					</Link>

					
					<Link className="nav" to={"/admin/dashboard/account"}>
						<i className="material-icons md-36 md-light navbar">admin_panel_settings</i>
						admin@arkanaputra.com
					</Link>
					
				</div>
				<i className="material-icons md-26 md-light off-canvas">menu</i>

			</div>
		);
	}
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../../assets/css/siderbar-admin.css";
import {db} from '../../config';


export default class Sidebar extends Component {
	constructor({path}){
		super();
		this.state = {
			sidebar: null,
			isLoading: null, 
		}
		this.path = path;
	}

	
	componentDidMount() {
		db.ref(this.path).on('value', async snapshot=>{
			const sidebar = snapshot.val();
			// console.log(sidebar)
			this.setState({
				sidebar : sidebar,
				isLoading: false
			});
		})
	}


	render() {

			const { sidebar, isLoading } = this.state;


		return (
		
			<div className="admin-sidebar" id="admin-sidebar">
				{
					!isLoading && sidebar !== null && (

						Object.keys(sidebar).map((val, key)=>(
							<div className="side-link" key={key} id="side-link">
								<Link to={`/admin/dashboard/${sidebar[val].slug}`} className="link_side">
									<span className="material-icons md-26 md-light spc">
										{`${sidebar[val].icon}`}
									</span>
									<div className="link-item">
										{`${sidebar[val].text}`}
									</div>
								</Link>
							</div>
						))
					)
				}

			</div>
		
		);
	}
}

import React, { Component } from 'react';
import { Link, BrowserRouter} from 'react-router-dom';
import {db} from '../../config';

export default class FooBox extends Component {

	constructor({path, icon}){
		super();
		
		this.state = {
			tableName: null,
			countRow: 0,
			isLoading: null
		}
		this.path = path;
		this.icon = icon;
	}
	async componentDidMount() {
		db.ref(this.path).on('value', async (snapshot) => {
			let tableName = [];
			let tableRow = [];
			snapshot.forEach(snapshot=>{
				tableName.push(snapshot.key);
				tableRow.push(snapshot.val());
			})
			if(tableName === null && tableRow === null) return;
			this.setState({
				tableName: tableName,
				countRow: tableRow.length,
				isLoading: false
			})
		})
	}
	render() {

		const { tableName, isLoading } = this.state;
		// DEBUG CHECKING DATA
		// !isLoading && tableName !== null && (console.log(tableName, countRow));
		
		return (
			<BrowserRouter>
		  		{
		  			!isLoading && tableName !== null && (
		  			tableName.map((val, key)=>(
		  				
		  				<div className="item-foo" key={key}>
							
				  			<Link to={"/admin/dashboard/explore_data/?query=" + val} className="footer-panel nav">
				  				<span className="material-icons md-26 md-light spc" >{this.icon}</span>
				  				{val}
				  			</Link>
				  		</div>
		  			)))
		  		}
			</BrowserRouter>
		);
	}
}

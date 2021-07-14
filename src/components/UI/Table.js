import React, { Component } from 'react';
// import {db} from '../../config';
import {showModal} from './Modal';


export default class Table extends Component {

	constructor({children}){
		super();
		this.state = {
			modal : null
		}
	}		
	// 	this.state = {
	// 		tableKey: null,
	// 		countRow: 0,
	// 		isLoading: null
	// 	}
	// 	this.tableRoot = tableRoot;
	// }
	// async componentDidMount() {
	// 	db.ref(this.tableRoot).on('value', async (snapshot) => {
	// 		let tableKey = [];
	// 		let tableRow = [];
	// 		snapshot.forEach(snapshot=>{
	// 			tableKey.push(snapshot.key);
	// 			tableRow.push(snapshot.val());
	// 		})
	// 		if(tableKey === null) return;
	// 		this.setState({
	// 			tableKey: tableKey,
	// 			countRow: tableRow.length,
	// 			isLoading: false
	// 		})
	// 	})
	// }

	
	render() {


		return (<>
			<table className="box-shadow">
				<thead>
					<tr>
						<th>Key</th>
						<th>Table</th>
						<th>Child</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Id</td>
						<td>Alam97</td>
						<td>Shopee</td>
						<td class="showModal" onClick={(e)=>showModal(e)}>Update</td>
					</tr>
					<tr>
						<td>Id</td>
						<td>Alam97</td>
						<td>Shopee</td>
						<td class="showModal" onClick={(e)=>showModal(e)}>Update</td>
						
					</tr>
					<tr>
						<td>Id</td>
						<td>Alam97</td>
						<td>Shopee</td>
						<td class="showModal" onClick={(e)=>showModal(e)}>Update</td>
						
					</tr>

				</tbody>
			</table>
			{this.children}
			</>
		);
	}
}

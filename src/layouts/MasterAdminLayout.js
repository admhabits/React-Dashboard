import React, { Component, StrictMode } from 'react';

import '../assets/css/master-admin-layout.css';
import FooBox from '../components/UI/FooBox';

import AdminHeader from '../components/admin/Header';
import AdminSidebar from '../components/admin/Sidebar';
import AdminContent from '../components/admin/Content';
import AdminFooBox from '../components/admin/Footer';

export default class MasterAdminLayout extends Component {
	constructor({children, rootPath, heading, icon}){
		super();
		this.children = children;
		this.rootPath = rootPath;
	}
	render() {

		
		return (
			<StrictMode>
			<div className="master-admin" id="master-admin">
				<AdminHeader/>

				<AdminSidebar path={`${this.rootPath}/data/layout/sidebar/`}/>

				<AdminContent >
						{ this.children }
				</AdminContent>

				<AdminFooBox>
					<FooBox path={this.rootPath} icon="account_tree"/>
				</AdminFooBox>
			</div>
			</StrictMode>
		);
	}
}

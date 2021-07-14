import React, { Component } from 'react';
import '../../assets/css/modal.css';

export default class Modal extends Component {
	constructor({title, children, footer}){
		super();
		this.titleModal = title;
		this.contentModal = children;
		this.footer = footer;
	}

	componentDidMount() {
		const modal = document.getElementById("modal");
		const close = document.getElementById("close");

		
		window.onclick = function(envt){
			if(envt.target === modal){

			modal.style.display ="none";
			}
		}

		close.onclick = function(){
			modal.style.display = "none";
		}
			
	}

	render() {

		return (
			<>
			<div className="__modal" id="modal">
				
				<div className="__modalWrapper">
					<div className="__modalHeader">
						<div className="title">{this.titleModal}</div>
						<span id='close'>&times;</span>
					</div>
					<div className="__modalContent">
						<div>{this.contentModal}</div>
					</div>
					<div className="__modalFooter">
						{this.footer}
					</div>
				</div>
				
			</div>
			</>
		);
	}
}

export const showModal = (e) => {
		e.target.classList.add('pointCss');
		e.target.addEventListener('click', ()=>{
			const modal = document.getElementById('modal');
			modal.style.display = "block";
			modal.classList.add('box-shadow');
		})
}



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.mclick = this.mclick.bind(this);
	}

	mclick() {
		document.getElementsByClassName('wrapper')[0].style.backgroundColor = 'red';
	}

	render(){
		return (
			<button onClick = {this.mclick} className='clicker'> Изменить дизайн </button>
			)
	}
}

export default Button;
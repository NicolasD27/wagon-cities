import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions'; 

class City extends Component {
	handleClick = () => {
		this.props.setActiveCity(this.props.city)
	}
	render() {
		return (
			<p className="list-group-item" onClick={this.handleClick} >{this.props.city.name}</p>
			);
	}
}

function mapDispatchToProps(dispatch) {
	 return bindActionCreators(
	 { setActiveCity: setActiveCity },
	 dispatch
	 );
}

export default connect(null, mapDispatchToProps)(City);


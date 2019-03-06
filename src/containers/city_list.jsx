import React, { Component } from 'react';
import City from './city.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions'; 


class CityList extends Component {
	
	componentWillMount() {

		this.props.setCities();
	}
	renderList() {
		return this.props.cities.map((city) => {
			return <City key={city.address} city={city} />;
		})

	}

	render() {
		return (
			<div className="cities">
				{this.renderList()}
			</div>
			
			);
	}


}
function mapDispatchToProps(dispatch) {
	 return bindActionCreators(
	 { setCities: setCities },
	 dispatch
	 );
}

function mapStateToProps(state) {
	 return {
	 cities: state.cities
	 };
} 

export default connect(mapStateToProps, mapDispatchToProps)(CityList);





import React from 'react';
import axios from 'axios';

import Trips from '../components/Trip.js';
import CustomForm from '../components/Form';


class TripList extends React.Component {
	state = {
		trips: []
	}

	componentDidMount() {
		axios.get('http://127.0.0.1:8000/api/')
			.then(res => {
				this.setState({
					trips: res.data
				});
			});
	}

	render() {
		return (
			<div>
				<Trips data={this.state.trips} />
				<h2>Create a Trip</h2>
				<CustomForm requestMethod='post' articleID={null} buttonText='Create' />
			</div>
		)
	}
}

export default TripList;
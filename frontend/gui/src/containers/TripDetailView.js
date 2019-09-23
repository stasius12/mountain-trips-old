import React from 'react';
import axios from 'axios';
import { Card, Button } from 'antd';

import CustomForm from '../components/Form';


class TripDetail extends React.Component {
    state = {
        trip: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}/`)
            .then(res => {
                this.setState({
                    trip: res.data
                });
            });
    }

    handleDelete = (event) => {
        axios.delete(`http://127.0.0.1:8000/api/${this.props.match.params.articleID}/`);
    }

    render() {
        return (
            <div>
                <Card title={this.state.trip.name}>
                    <p>{this.state.trip.description}</p>
                </Card>
                <br />
                <h2>Edit trip</h2>
                <CustomForm requestMethod='put' articleID={this.props.match.params.articleID} buttonText='Update' />
                <form onSubmit={this.handleDelete}>
                    <Button type='danger' htmlType='submit'>Delete</Button>
                </form>
            </div>
        )
    }
}

export default TripDetail;
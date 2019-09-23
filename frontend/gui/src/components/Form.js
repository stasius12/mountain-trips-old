import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

class CustomForm extends React.Component {
    handleFormSubmit = (event, requestMethod, articleID) => {
        // event.preventDefault();
        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;

        switch (requestMethod) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    name: name,
                    description: description
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    name: name,
                    description: description
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
        }
    }
    render() {
        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(
                    event,
                    this.props.requestMethod,
                    this.props.articleID
                )}>
                    <Form.Item label="Name">
                        <Input name="name" placeholder="Put a name here" />
                    </Form.Item>
                    <Form.Item label="Description">
                        <Input name="description" placeholder="Write a description here" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">{this.props.buttonText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CustomForm;
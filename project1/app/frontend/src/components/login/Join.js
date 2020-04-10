import React, { Component } from "react";
<<<<<<< HEAD
import './join.less';
import {Form, Input, Button, Checkbox, Select, DatePicker} from 'antd';
import 'antd/dist/antd.css';
=======
import {Form, Input, Button, Checkbox, Select, DatePicker} from 'antd';
import {Redirect} from "react-router-dom";
import './join.less';
import 'antd/dist/antd.css';
import axios from 'axios';
import cookie from 'react-cookies';

// csrf settings for django
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
>>>>>>> 3404c616f633255c7f5edb9c40e574eed1fb64b1

const formItemLayout = {
    labelCol: {
        xs: {
        span: 24,
        },
        sm: {
        span: 8,
        },
    },
    wrapperCol: {
        xs: {
        span: 24,
        },
        sm: {
        span: 16,
        },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
        span: 24,
        offset: 0,
        },
        sm: {
        span: 16,
        offset: 8,
        },
    }
};

<<<<<<< HEAD
const MajorSelector = (
    <Select style={{width: '100%'}}>
        <Option value="cs">Computer Science</Option>
        <Option value="ce">Computer Engineering</Option>
        <Option value="cx">CS+X</Option>
        <Option value="ee">Others</Option>
    </Select>
);


class JoinForm extends Component {
    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
    }

    onFinish() {

    }
        
    render() {
=======
class JoinForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
            email: '',
            username: '',
            password: '',
            gradYear: 0,
            major: ''
        }
    }

    emailDataHandler = (e) => {
        this.state.email = e.target.value;
    }

    usernameDataHandler = (e) => {
        this.state.username = e.target.value;
    }

    passwordDataHandler = (e) => {
        this.state.password = e.target.value;
    }

    gradDataHandler = (date, dateString) => {
        this.state.gradYear = parseInt(dateString);
    }

    majorDataHandler = (value) => {
        this.state.major = value;
    }

    signUp = () => {
        axios.post('http://127.0.0.1:8000/user/join/', {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            gradYear: this.state.gradYear,
            major: this.state.major,
        })
        .then((res) => {
            if (res.status == 200) {
                // cookie.save('user', this.state.username, { path: '/' });
                this.setState({redirect: '/'});
            }
            else
                alert(res.message)
        })
        .catch((err) => alert(err.response.data))
    }
        
    render() {
        if (this.state.redirect) {
            return <Redirect to = {this.state.redirect}/>;
        }

>>>>>>> 3404c616f633255c7f5edb9c40e574eed1fb64b1
        return (<Form
            {...formItemLayout}
            // form={form}
            name="join"
<<<<<<< HEAD
            onFinish={this.onFinish}
=======
            onFinish={this.signUp}
            // onFinishFailed={this.onFinishFailed}
>>>>>>> 3404c616f633255c7f5edb9c40e574eed1fb64b1
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        messgae: 'The input is not a valid E-mail!'
                    },
                    {
                        required: true,
                        messgae: 'Please input your E-mail!'
                    }
                ]}
            >
<<<<<<< HEAD
                <Input/>
=======
                <Input onChange={this.emailDataHandler}/>
>>>>>>> 3404c616f633255c7f5edb9c40e574eed1fb64b1
            </Form.Item>

            <Form.Item
                name="username"
                label="User Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                        whitespace:true
                    }
                ]}
            >
<<<<<<< HEAD
                <Input/>
=======
                <Input onChange={this.usernameDataHandler}/>
>>>>>>> 3404c616f633255c7f5edb9c40e574eed1fb64b1
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!'
                    }
                ]}
                hasFeedback
            >
<<<<<<< HEAD
                <Input.Password/>
=======
                <Input.Password onChange={this.passwordDataHandler}/>
>>>>>>> 3404c616f633255c7f5edb9c40e574eed1fb64b1
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!'
                    },
                    ({getFieldValue}) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') == value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The two passwords do not match!');
                        }
                    })
                ]}
            >
                <Input.Password/>
            </Form.Item>    
            
            <Form.Item
                name="year"
                label="Graduate Year"
                rules={[
                    {
                        required: true,
                        message: 'Please select time!'
                    }
                ]}
            >
<<<<<<< HEAD
                <DatePicker picker="year" style={{width: '100%'}}/>
=======
                <DatePicker picker="year" style={{width: '100%'}} onChange={this.gradDataHandler}/>
>>>>>>> 3404c616f633255c7f5edb9c40e574eed1fb64b1
            </Form.Item>

            <Form.Item
                name="major"
                label="Major"
            >
<<<<<<< HEAD
                {MajorSelector}
=======
                <Select style={{width: '100%'}} onChange={this.majorDataHandler}>
                    <Select.Option value="cs">Computer Science</Select.Option>
                    <Select.Option value="ce">Computer Engineering</Select.Option>
                    <Select.Option value="cx">CS+X</Select.Option>
                    <Select.Option value="ee">Others</Select.Option>
                </Select>
>>>>>>> 3404c616f633255c7f5edb9c40e574eed1fb64b1
            </Form.Item>   

            <Form.Item name="agreement" valuePropName="checked" {...tailFormItemLayout}>
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>    

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>             
        </Form>)
    }
    
}

export class Join extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='join'>
              <div className='container'>
                <h1>Join us to gossip together!</h1>
                <div className='form-wrapper'>    
                    <JoinForm></JoinForm>
                </div>
              </div>
            </div>            
        )
    }
}
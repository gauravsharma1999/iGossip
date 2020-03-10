import React, { Component } from "react";
import { Menu, Layout } from 'antd';
import './navigator.less';
import 'antd/dist/antd.css';
import { BankOutlined, LoginOutlined, HeartOutlined, DatabaseOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

// Navigator:
// - Provide quick navigation to functionalities like homepage, login, logout, favorite courses, comments

export class Navigator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 'home'
        };
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div className='navigator'>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme='dark'>
                    <Menu.Item id='logo' disabled='true'>
                        iGossip
                    </Menu.Item>

                    <Menu.Item key="login">
                        <LoginOutlined />
                        Login
                    </Menu.Item>

                    <Menu.Item key="comments">
                        <DatabaseOutlined />
                        Comments
                    </Menu.Item>

                    <Menu.Item key="favorites">
                        <HeartOutlined />
                        Favorites
                    </Menu.Item>

                    <Menu.Item key="home">
                        <BankOutlined />
                        Home
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Navigator;
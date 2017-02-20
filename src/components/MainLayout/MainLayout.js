import React from 'react';

import {Layout, Menu, Icon} from 'antd';
const {Header, Sider, Content} = Layout;

import styles from './MainLayout.less';

const MainLayout = (props) => {

    const {children} = props;

    const state = {
        collapsed: true
    };
    const toggle = () => {}

    return (
        <Layout id="mainLayout">
            <Sider trigger={null} collapsible collapsed={state.collapsed}>
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user"/>
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera"/>
                        <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload"/>
                        <span className="nav-text">nav 3</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{
                    background: '#fff',
                    padding: 0
                }}>
                    <Icon className="trigger" type={state.collapsed
                        ? 'menu-unfold'
                        : 'menu-fold'} onClick={toggle}/>
                </Header>
                <Content style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280
                }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}

export default MainLayout;

import React from 'react';

import {Layout, Menu, Icon} from 'antd';
const {Header, Sider, Content,Footer} = Layout;

import styles from './MainLayout.less';

const MainLayout = (props) => {

    const {children,status,actions} = props;

    return (
        <Layout id="mainLayout">
            <Sider trigger={null} collapsible collapsed={status.collapsed}>
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
                    <Icon className="trigger" type={status.collapsed
                        ? 'menu-unfold'
                        : 'menu-fold'} onClick={() => actions.onSwitchSider()}/>
                </Header>
                <Content style={{
                    margin: '12px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280
                }}>
                    {children}
                </Content>
                <Footer onClick={() => actions.onSwitchSider()}>
                    SJGY © 2017
                </Footer>
            </Layout>
        </Layout>
    );
}

export default MainLayout;

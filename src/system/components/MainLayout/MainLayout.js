import React from 'react';

import {Layout, Menu, Icon} from 'antd';
import UserInfo from './UserInfo/UserInfo';

const {Header, Sider, Content, Footer} = Layout;
import Menus from './Menus/Menus'

import styles from './MainLayout.less';

const MainLayout = (props) => {

    const {children, dispatch, status, app, location} = props;

    const actions = {
        onSwitchSider: function() {
            dispatch({type: 'status/switchSider'});
        },
        handleLogout: function() {
            dispatch({type: 'app/logout'});
        }
    };

    const menusProps = {
        darkTheme: status.darkTheme,
        collapsed: status.collapsed,
        location: location,
        menus:app.menus
    }

    return (
        <Layout id="mainLayout">
            <Sider trigger={null} collapsible collapsed={status.collapsed}>
                <div className="logo"/>
                <Menus {...menusProps}/>
            </Sider>
            <Layout>
                <Header className={styles.header}>
                    <Icon className="trigger" type={status.collapsed
                        ? 'menu-unfold'
                        : 'menu-fold'} onClick={() => actions.onSwitchSider()}/>
                    <UserInfo account={app.account} handleLogout={actions.handleLogout}/>
                </Header>
                <Content style={{
                    margin: '12px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280
                }}>
                    {props.children}
                </Content>
                <Footer>
                    SJGY © 2017
                </Footer>
            </Layout>
        </Layout>
    );
}

export default MainLayout;

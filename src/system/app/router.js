import React, {PropTypes} from 'react';
import {connect} from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import {message} from 'antd';

const App = ({children, location, dispatch, app, status}) => {

    const {isAuth, account} = app;

    const mainLayoutProps = {
        account,
        status: {
            collapsed: status.collapsed
        },
        actions: {
            onSwitchSider: function() {
                dispatch({type: 'status/switchSider'});
            },
            handleLogout: function() {
                dispatch({type: 'app/logout'});
            }

        }

    };

    return isAuth
        ? <MainLayout {...mainLayoutProps}>{children}</MainLayout>
        : <div/>
}

const mapStateToProps = (state) => {
    return {app: state.app, status: state.status}
}

export default connect(mapStateToProps)(App);

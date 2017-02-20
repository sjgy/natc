import React, {PropTypes} from 'react';
import {connect} from 'dva';
import CustomMainLayout from '../components/MainLayout/CustomMainLayout';
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
            }
        }

    };

    return isAuth
        ? <CustomMainLayout {...mainLayoutProps}>{children}</CustomMainLayout>
        : <div/>
}

const mapStateToProps = (state) => {
    return {app: state.app, status: state.status}
}

export default connect(mapStateToProps)(App);

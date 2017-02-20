import React, {PropTypes} from 'react';
import {connect} from 'dva';
import MainLayout from '../../components/MainLayout/MainLayout';
import {message} from 'antd';

console.log(MainLayout);

const App = ({children, location, dispatch, app}) => {

    const { isAuth, account } = app;

    const mainLayoutProps = {
        account,
        handleLogout: function (e) {
            e.preventDefault();
            message.success('Log out successfully :)');
            dispatch({type: 'app/logout'});
        }
    };

    return isAuth ? <MainLayout {...mainLayoutProps}>{children}</MainLayout> : <div/>
}

export default connect(({app}) => ({app}))(App);

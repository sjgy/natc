import React, {PropTypes} from 'react';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import {message} from 'antd';

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.checkAuth(this.props.app.isAuthenticated);
    }

    componentWillReceiveProps(nextProps) {
        this.checkAuth(nextProps.app.isAuthenticated);
    }

    checkAuth(isAuthenticated) {
        if (!isAuthenticated) {
            let redirectAfterLogin = this.props.location.pathname;
            this.props.dispatch(routerRedux.push(`/login?next=${redirectAfterLogin}`));
        }
    }

    render() {
        return this.props.app.isAuthenticated
            ? <MainLayout {...this.props}/>
            : <div/>
    }

}

const mapStateToProps = ({app, status}) => {
    return {app: app, status: status}
}

export default connect(mapStateToProps)(AppContainer);

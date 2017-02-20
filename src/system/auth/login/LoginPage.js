import React, {PropTypes} from 'react';
import {connect} from 'dva';
import LoginLayout from '../../../components/LoginLayout/LoginLayout';

const LoginPage = () => {
    return (
        <LoginLayout>
            <div>register</div>
        </LoginLayout>
    );
}

export default connect()(LoginPage);

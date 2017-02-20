import React, {PropTypes} from 'react';
import {connect} from 'dva';

const LoginPage = () => {
  return(
    <h1>login</h1>
  );
}

export default connect()(LoginPage);

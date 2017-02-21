import React, {PropTypes} from 'react';
import {connect} from 'dva';

const Index = () => {
  return(
    <div>
      <h1>index</h1>
      <a href="/#/login">login</a> |  <a href="/#/register">register</a> | <a href="/#/home">home</a>
    </div>
  );
}

export default connect()(Index);

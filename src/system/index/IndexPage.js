import React, {PropTypes} from 'react';
import {connect} from 'dva';

const Index = () => {
  return(
    <h1>index</h1>
  );
}

export default connect()(Index);

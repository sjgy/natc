import React, {PropTypes} from 'react'
import {connect} from 'dva'

import './HomePage.less';

function HomePage() {

  return (
    <h2>home</h2>
  )
}

export default connect()(HomePage);

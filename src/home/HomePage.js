import React, {PropTypes} from 'react'
import {connect} from 'dva'

function HomePage() {

  return (
    <h2>home</h2>
  )
}

export default connect()(HomePage);

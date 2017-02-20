import React, {PropTypes} from 'react'
import {connect} from 'dva'

function App({children, location, dispatch}) {

  return (
    <div>
      <h1>app</h1>
      {children}
    </div>
  )
}

export default connect()(App);

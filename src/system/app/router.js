import React, {PropTypes} from 'react'
import {connect} from 'dva'
import Main from '../components/layout/main';

import {Spin} from 'antd'
import {classnames} from '../utils'
import '../components/layout/common.less';

function App({children, location, dispatch, app}) {

  const {
    login,
    loading,
    loginButtonLoading,
    user,
    siderFold,
    darkTheme,
    isNavbar,
    menuPopoverVisible
  } = app;
  const loginProps = {
    loading,
    loginButtonLoading,
    onOk(data) {
      dispatch({type: 'app/login', payload: data})
    }
  }

  const headerProps = {
    user,
    siderFold,
    location,
    isNavbar,
    menuPopoverVisible,
    switchMenuPopover() {
      dispatch({type: 'app/switchMenuPopver'})
    },
    logout() {
      dispatch({type: 'app/logout'})
    },
    switchSider() {
      dispatch({type: 'app/switchSider'})
    }
  }

  const siderProps = {
    siderFold,
    darkTheme,
    location
  }

  const mainProps = {
    headerProps: headerProps,
    siderProps: siderProps
  }

  return (
    <div>
      {login
        ? <Main {...mainProps}>{children}</Main>
        : <div className="main"><Spin tip='加载用户信息...' spinning={loading} size='large'><Login {...loginProps}/></Spin></div>}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
  loginButtonLoading: PropTypes.bool,
  login: PropTypes.bool,
  user: PropTypes.object,
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool
}

export default connect(({app}) => ({app}))(App)

import React from 'react'
import {Router} from 'dva/router'
import App from './app/router'

export default function({history, app}) {
    const routes = [
        {
            component: App,
            getIndexRoute(nextState, cb) {
                require.ensure([], require => {
                    cb(null, {component: require('./index/router')})
                })
            }
        }
    ]

    return <Router history={history} routes={routes}/>
}

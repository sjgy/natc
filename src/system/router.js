import React from 'react';

const systemRouter = [
    {
        path: '/',
        getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./index/IndexPage'))
            })
        }
    }, {
        path: '/login',
        getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./auth/login/LoginPage'))
            })
        }
    }, {
        path: '/register',
        getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./auth/register/RegisterPage'))
            })
        }
    }
];

const pushRoutes = function(routes) {

    systemRouter.push(routes);
    systemRouter.push({
        path: '*',
        name: 'error',
        getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./error/ErrorPage'))
            })
        }
    });
    return systemRouter;
}

export default pushRoutes;

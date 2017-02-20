import React from 'react';
import styles from './LoginPage.less';
import {Link} from 'dva/router';
import {connect} from 'dva';
import LoginLayout from '../../components/LoginLayout/LoginLayout';
import {Form, Icon, Input, Button, Checkbox} from 'antd';

function LoginPage({loading, dispatch, form}) {

    const {getFieldDecorator, validateFields} = form;

    function commit(data) {
        const {username, password} = data;
        dispatch({
            type: 'app/auth',
            payload: {
                username,
                password
            }
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        validateFields((error, values) => {
            if (!error) {
                commit(values);
            }
        });
    }

    return (
        <LoginLayout>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <span>登录!</span>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your username!'
                                }
                            ]
                        })(
                            <Input addonBefore={< Icon type = "user" />} placeholder="Username"/>
                        )
}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Password!'
                                }
                            ]
                        })(
                            <Input addonBefore={< Icon type = "lock" />} type="password" placeholder="Password"/>
                        )
}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(
                            <Checkbox disabled>Remember me</Checkbox>
                        )
}
                        <span className={styles.toOther}>Or
                            <Link to="/register">register now!</Link>
                        </span>
                        <Button type="primary" htmlType="submit" className={styles.button}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </LoginLayout>
    );
}

export default connect()(Form.create()(LoginPage));

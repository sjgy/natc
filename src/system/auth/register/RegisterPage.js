import React from 'react';
import styles from './RegisterPage.less';
import {Link} from 'dva/router';
import LoginLayout from '../../components/LoginLayout/LoginLayout';
import {connect} from 'dva';
import {Form, Input, Button, Icon} from 'antd';

const RegisterPage = ({form, dispatch}) => {
    let passwordDirty = false;
    const getFieldDecorator = form.getFieldDecorator;

    function handleSubmit(e) {
        e.preventDefault();
        form.validateFieldsAndScroll((error, {username, email, password}) => {
            if (!error) {
                dispatch({
                    type: 'app/register',
                    payload: {
                        username,
                        email,
                        password
                    }
                });
            }
        });
    }

    function handlePasswordBlue(e) {
        const value = e.target.value;
        passwordDirty = passwordDirty || !!value;
    }

    function checkPassword(rule, value, callback) {
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入的密码不匹配!');
        } else {
            callback();
        }
    }

    function checkConfirm(rule, value, callback) {
        if (value && passwordDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    }

    const formItemLayout = {
        labelCol: {
            span: 6
        },
        wrapperCol: {
            span: 14
        }
    };

    const tailFormItemLayout = {
        wrapperCol: {
            span: 17,
            offset: 6
        }
    };

    return (
        <LoginLayout>
            <div className={styles.container}>
                <div className={styles.logo}>注册</div>
                <Form horizontal onSubmit={handleSubmit}>
                    <Form.Item {...formItemLayout} label="用户名" hasFeedback>
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: '请务必输入用户名'
                                }
                            ]
                        })(
                            <Input addonBefore={< Icon type = "user" />}/>
                        )
}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="E-mail" hasFeedback>
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'E-mail格式不合法!'
                                }, {
                                    required: true,
                                    message: '请务必输入E-mail!'
                                }
                            ]
                        })(
                            <Input addonBefore={< Icon type = "mail" />}/>
                        )
}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="密码" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请务必输入密码!'
                                }, {
                                    validator: checkConfirm
                                }
                            ]
                        })(
                            <Input type="password" onBlur={handlePasswordBlue} addonBefore={< Icon type = "lock" />}/>
                        )
}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="密码重输" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: '请务必确认密码'
                                }, {
                                    validator: checkPassword
                                }
                            ]
                        })(
                            <Input type="password" addonBefore={< Icon type = "lock" />}/>
                        )
}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" size="large">注册</Button>
                        <span className={styles.toOther}>已有密码？
                            <Link to="/login">登入</Link>
                        </span>
                    </Form.Item>
                </Form>
            </div>
        </LoginLayout>
    );
}

export default connect((app) => ({app}))(Form.create()(RegisterPage));

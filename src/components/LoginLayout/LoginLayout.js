import React from 'react';
import {Layout} from 'antd';
import styles from './LoginLayout.less';
const {Content, Footer} = Layout;

function LoginLayout(props) {
    return (
        <Layout className={styles.normal}>
            <div className={styles.background}></div>
            <Content className={styles.content}>
                {props.children}
            </Content>
            <Footer className={styles.footer}>
                <span>SJGY @ 2017</span>
            </Footer>
        </Layout>
    );
}

export default LoginLayout;

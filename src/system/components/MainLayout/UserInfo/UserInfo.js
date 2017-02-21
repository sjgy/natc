import React, {PropTypes} from 'react';
import {Link} from 'dva/router';
import {Tooltip, Button, Menu , Icon} from 'antd';

import styles from './UserInfo.less';

const SubMenu = Menu.SubMenu;

const UserInfo = ({
    account,
    handleLogout
}) => {
    const {ability, username} = account;
    const tooltipProps = {
        placement: 'bottom',
        title: ability === 'super' ? 'Super Admin' : 'Normal Admin',
    };

    return (
      <Menu className={styles.user} mode='horizontal'>
        <SubMenu style={{
          float: 'right'
        }} title={<span> <Icon type='user'/> {username} </span>}>
          <Menu.Item key='logout'>
            <a onClick={handleLogout}>注销</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
};

UserInfo.propTypes = {
    account: PropTypes.object.isRequired,
    handleLogout: PropTypes.func.isRequired
};

export default UserInfo;

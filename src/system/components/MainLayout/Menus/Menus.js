import React from 'react'
import {Menu, Icon} from 'antd'
import {Link} from 'dva/router'

const getMenus = function(menuArray, collapsed, parentPath) {

    parentPath = parentPath || '/'

    const topMenus = menuArray.map(item => item.key)

    return menuArray.map(item => {
        if (item.child) {
            return (
                <Menu.SubMenu key={item.key} title={< span > {
                    item.icon
                        ? <Icon type={item.icon}/>
                        : ''
                }
                {
                    collapsed && topMenus.indexOf(item.key) >= 0
                        ? ''
                        : item.name
                } < /span>}>
                    {getMenus(item.child, collapsed, parentPath + item.key + '/')}
                </Menu.SubMenu>
            )
        } else {
            return (
                <Menu.Item key={item.key}>
                    <Link to={parentPath + item.key}>
                        {item.icon
                            ? <Icon type={item.icon}/>
                            : ''}
                        {collapsed && topMenus.indexOf(item.key) >= 0
                            ? ''
                            : item.name}
                    </Link>
                </Menu.Item>
            )
        }
    })
}

function Menus({collapsed, location, darkTheme, menus}) {
    const menuItems = getMenus(menus, collapsed)

    return (
        <Menu mode={collapsed
            ? 'vertical'
            : 'inline'} theme={darkTheme
            ? 'dark'
            : 'light'} defaultSelectedKeys={[location.pathname.split('/')[location.pathname.split('/').length - 1] || 'home']}>
            {menuItems}
        </Menu>
    );
}

export default Menus;

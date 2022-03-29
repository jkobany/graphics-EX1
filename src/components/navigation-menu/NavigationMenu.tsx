import React, {useContext, useEffect, useState} from 'react';
import './NavigationMenu.scss';
import {Menu} from 'antd';
import {Link, NavLink} from 'react-router-dom';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    handleClick: any
    current: string
    activeOrg: string
}


const NavigationMenu: React.FC<any> = (props: IProps) => {
    const {handleClick, current} = props;
    return (
        <div className="navigation-menu">
            <Menu onClick={handleClick}
                  selectedKeys={[current]}
                  mode="horizontal">
    
                <Menu.Item key="ex1">
                    <NavLink to={"/"}>EX1</NavLink>
                </Menu.Item>
            </Menu>
        </div>
    );
};
export default NavigationMenu;
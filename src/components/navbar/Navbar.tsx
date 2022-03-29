import React, {useEffect, useState} from 'react';
import './Navbar.scss';
import NavigationMenu from '../navigation-menu/NavigationMenu';
import {useLocation} from 'react-router-dom';
import { ImportOutlined } from '@ant-design/icons';


interface INavBarProps {
    signOut?: Function,
}

const NavBar = (props: INavBarProps) => {
    // STATES
    const location = useLocation();
    const routeName = location.pathname.replace('/', '');
    const [current, setCurrent] = useState(routeName || 'ex1');

    const handleClick = (e: any) => {
        setCurrent(e.key);
    };

    useEffect(() => {
        const newLocation = location.pathname.replace('/', '');
        if (newLocation !== current) {
            const currentRoute = newLocation.length ? newLocation : 'ex1';
            setCurrent(currentRoute);
        }
    }, [location, current]);


    return (
        <>
            <div className='navbar'>
                <div className="mast-head">
                    <h4>Grapic course - Shenkar</h4>
                </div>
                <NavigationMenu handleClick={handleClick} current={current}/>
                <div className="tab-button" onClick={() => {}}>
                    <ImportOutlined style={{marginLeft:15, fontSize:25, color: "cadetblue"}}/>
                </div>
            </div>
        </>
    );
};
export default NavBar;
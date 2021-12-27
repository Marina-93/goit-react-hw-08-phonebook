import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLoggedIn } from '../../redux/auth/auth-selector';
import './Menu.css';

export default function Navigation() {
    const isLoggedIn = useSelector(getLoggedIn);
    return (
        <div className="line-components">
            <NavLink className={(data)=>data.isActive?"nav activ": "nav"} to="/" > Home </NavLink>
            {isLoggedIn && <NavLink className={(data) => data.isActive ? "nav activ" : "nav"} to="/contacts"> Contacts </NavLink>}
        </div>
    )
};

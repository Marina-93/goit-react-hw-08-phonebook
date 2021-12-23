import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

export default function Navigation() {
    return (
        <nav className="line-components">
            <NavLink className={(data)=>data.isActive?"nav activ": "nav"} to="/" > Home </NavLink>
            <NavLink className={(data)=>data.isActive?"nav activ": "nav"} to="/contacts"> Contacts </NavLink>
        </nav>
    )
};

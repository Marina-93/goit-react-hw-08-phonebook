import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

export default function AuthNav() {
    return (
        <div className="line-components">
            <NavLink className={(data)=>data.isActive?"nav activ": "nav"} to="/register"> Sign on </NavLink>
            <NavLink className={(data)=>data.isActive?"nav activ": "nav"} to="/login"> Sign in </NavLink>
        </div> 
    )
};
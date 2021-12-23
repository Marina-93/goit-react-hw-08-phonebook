import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu/UserMenu';
import authSelectors from '../../redux/auth/auth-selector';
import './Menu.css';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <nav className="line">
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav />}
        </nav>
    )
};
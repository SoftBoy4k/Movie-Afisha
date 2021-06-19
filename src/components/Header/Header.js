import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <div className="main-header">
            <div className="main-logo">
                <NavLink to='/' exact style={{textDecoration: 'none'}}>
                    <h1 className="logo-inner">Movie Afisha</h1>
                    <h2 className="logo-inner">Gomel</h2>
                </NavLink>
            </div>
        </div>
    )
}

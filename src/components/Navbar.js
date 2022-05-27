import React from 'react'
import logo from '../resources/logo.jpg'

export default function Navbar() {
    return (
        <nav>
            <div className="nav-list">
                <a href="https://github.com/oguerrero" target="blank"><img src={logo} alt="menu"className="logo-img" /></a>
            </div>
        </nav>
    );
}
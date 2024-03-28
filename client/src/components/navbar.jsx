// Navbar.jsx

import React from 'react';

const Navbar = ({ user }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="navbar-item">Logo</span>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/homepage">Home</a>
                    <a className="navbar-item" href="/Explore">Explore</a>
                    <a className="navbar-item" href="/Personal Collection">Personal Collection</a>
                    <a className="navbar-item" href="/Drops">Drops</a>
                    <a className="navbar-item" href="/More">More</a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="control">
                            <input className="input" type="text" placeholder="Search..." />
                            <button className="button is-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={user.image} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


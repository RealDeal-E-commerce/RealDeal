import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Market from './Market.jsx'; // Assuming Market component is correctly defined
// Remove duplicate import of React

const Navbar = ({ user }) => {
    const [view, setView] = useState('home'); // State to manage the current view

    const changeView = (newView) => {
        setView(newView); // Update the current view when clicked
    };

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
                        <a className="navbar-item" onClick={() => changeView('home')}>Home</a>
                        <a className="navbar-item" onClick={() => changeView('Explore')}>Explore</a>
                        <a className="navbar-item" href="/Personal Collection">Personal Collection</a>
                        <a className="navbar-item" onClick={() => changeView('chat')}>Messages</a>
                        <div className="dropdown">
                            <a className="dropbtn">More<i className="fa fa-caret-down"></i></a>
                            <div className="dropdown-content">
                                <a onClick={() => changeView('Market')}>Stats</a>
                                <a onClick={() => changeView('Fashionshows')}>Shows</a>
                                <a href="#">About Us</a>
                                <a href="#">Community</a>
                                <a onClick={() => changeView('Allnft')}>ALL NFT</a>
                                <a onClick={() => changeView('Userprofile')}>Edit Profile</a>
                                <a href="#">Setting</a>
                            </div>
                        </div>
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
            </div>
        </nav>
    );
}

export default Navbar;

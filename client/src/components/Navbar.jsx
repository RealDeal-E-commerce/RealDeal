import React from 'react';
import { Link } from 'react'; // Correct import statement for Link from React Router
// import ChatRoom from "./components/ChatRoom.jsx"

const Navbar = ({ user }) => {
    const renderChatLink = () => {
        if (user) {
            return (
                <div className="navbar-item">
                    {/* <Link className="button is-info" to="/chat">Chat</Link> */}
                </div>
            );
        }
        return null; // Return null if user is not logged in
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="navbar-item">Logo</span>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    {/* <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/Explore">Explore</Link>
                    <Link className="navbar-item" to="/Personal Collection">Personal Collection</Link>
                    <Link className="navbar-item" to="/Drops">Drops</Link>
                    <Link className="navbar-item" to="/More">More</Link> 
                    <Link className="navbar-item" to="/Chat">Chat</Link> */}
                    {/* <Link className="navbar-item" to="/">Home</Link> */}
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="control">
                            <input className="input" type="text" placeholder="Search..." />
                            <button className="button is-primary">Search</button>
                        </div>
                    </div>
                    {/* Call renderChatLink function to conditionally render the chat link */}
                    {/* {renderChatLink()} */}
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

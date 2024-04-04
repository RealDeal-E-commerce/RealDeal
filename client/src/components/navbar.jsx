import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Market from'./Market.jsx'
const Navbar = ({ user ,changeView,setNftt,setObjj}) => {
   console.log(user);
   console.log(changeView);
   
    
      

    return (
         
        <nav className="navbar">
           
            <div className="navbar-brand">
                <span className="navbar-item">Logo</span>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item"  onClick={() => changeView('home',user)}>Home</a>
                    <a className="navbar-item" onClick={() => changeView('Explore')}>Explore</a>
                    <a className="navbar-item" href="/Personal Collection">Personal Collection</a>
                    <a className="navbar-item" onClick={() => changeView('chat')}>Messages</a>
                    
                    <div class="dropdown">
                    <a class="dropbtn">More<i class="fa fa-caret-down"></i> </a>
                     <div class="dropdown-content">
                        <a  onClick={() => changeView('Market')} >Stats</a>
                        <a onClick={() => changeView('Fashionshows')}>Shows</a>
                        <a href="#">About Us</a>
                        <a href="#">Community</a>
                        <a onClick={() => changeView('Allnft')}>ALL NFT</a>
                        <a onClick={() => changeView('Userprofile')}>User Profile</a>
                        <a href="#">Setting</a>
                       </div>
                    </div>
                    
                </div>
                <div className="navbar-end">
                    <div className="navbar-item"> 
                        <div className="control">
                            <input className="input" type="text" placeholder="Search..." onChange={(e)=>setObjj(e.target.value)}/>
                            <button className="navbar-item" onClick={() => setNftt(true) }>Search</button>
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

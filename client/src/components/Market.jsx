import React, { useState } from 'react';
import Navbar from './navbar.jsx';
import FooTer from './footer.jsx';
 import myImage from './pic/11.png'; 
const Marketpage = ({ user }) => {
   
    return (
        <div style={{ paddingBottom: '100px' }}>
           
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ flex: 1, textAlign: 'center', paddingRight: '20px' }}>
                        <h2>Top Market Statistics</h2>
                        <p style={{ color: 'grey-dark', opacity: 0.5 }}>The top NFTs on {Date()}, ranked by volume, floor price and other statistics.</p>
                    </div>
                    
                </div>
                </div>
               <div style={{ display:'flex',justifyContent:'center',alignItems:'center',height: '100vh',flexDirection:'column'}}>
                 <div  style={{ width: '90%',height: '700px',overflow: 'hidden'}}>
                  <img src={myImage}  alt="Description" style={{ 
                    width: '100%', 
                     height: '100%', 
                    objectFit: 'fill' 
                    }} />
               </div>
             </div><br /><br /><br /><br />

            <FooTer />
        </div>
    );
}

export default Marketpage;

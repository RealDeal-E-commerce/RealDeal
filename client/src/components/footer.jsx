import React from 'react';
import { Footer } from 'flowbite-react';
import { FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa"; // Import Instagram, Discord, and YouTube icons

function FooTer() { // Remove 'year' from props
  return (
    <Footer container className="dark-text footer"> {/* Add the "footer" class */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
       <div style={{ textAlign: 'left' }}>
          <h3>Logo</h3>
          <p style={{ color: 'grey-dark', opacity: 0.5 }}>lorem ipsum dolor sit amet,</p>
          <p style={{ color: 'grey-dark', opacity: 0.5 }}>consectetur adipiscing elit.</p>
         
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3>About</h3>
          <p style={{ color: 'grey-dark', opacity: 0.5 }}>Product</p>
          <p style={{ color: 'grey-dark', opacity: 0.5 }}>Resource</p>
          <p style={{ color: 'grey-dark', opacity: 0.5 }}>Term & condition</p>
          <p style={{ color: 'grey-dark', opacity: 0.5 }}>FAQ</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3>Company</h3>
          <p style={{ color: 'grey-dark', opacity: 0.5 }}>Our Team</p>
          <p style={{ color: 'grey-dark', opacity: 0.5 }}>Partner with Us</p>
          <p style={{ color: 'grey-dark', opacity: 0.5 }}>Privacy & Policy</p>
          <p style={{ color: 'grey-dark', opacity: 0.5 }}>Features</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <h3>Contact</h3>
          <p style={{ color: 'grey-dark', opacity: 0.5 }}>+012 3456789</p>
          <p style={{ color: 'grey-dark', opacity: 0.5 }}>adorableprogrammer@gmail.com</p>
          <Footer.LinkGroup>
            <FaInstagram style={{ margin: '10px' }} className="icon" size={20} /> {/* Instagram Icon */}
            <FaDiscord style={{ margin: '10px' }} className="icon" size={20} /> {/* Discord Icon */}
            <FaYoutube style={{ margin: '10px' }} className="icon" size={20} /> {/* YouTube Icon */}
          </Footer.LinkGroup>
        </div>
      </div>
    </Footer>
  );
}

export default FooTer;

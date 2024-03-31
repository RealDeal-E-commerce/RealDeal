import React from 'react';
import { Footer } from 'flowbite-react';
import { FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa"; // Import Instagram, Discord, and YouTube icons

function FooTer() {
  return (
    <Footer container className="dark-text" style={{ backgroundColor: '#6A5ACD', color: 'black' }}> {/* Set text color to white */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ textAlign: 'left', flex: 1 }}>
          <h3 style={{ margin: 0 }}>Logo</h3>
          <p style={{ margin: 0 }}>lorem ipsum dolor sit amet,</p>
          <p style={{ margin: 0 }}>consectetur adipiscing elit.</p>
        </div>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <h3>About</h3>
          <p>Product</p>
          <p>Resource</p>
          <p>Term & condition</p>
          <p>FAQ</p>
        </div>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <h3>Company</h3>
          <p>Our Team</p>
          <p>Partner with Us</p>
          <p>Privacy & Policy</p>
          <p>Features</p>
        </div>
        <div style={{ textAlign: 'right', flex: 1 }}>
          <h3>Contact</h3>
          <p>+012 3456789</p>
          <p>adorableprogrammer@gmail.com</p>
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

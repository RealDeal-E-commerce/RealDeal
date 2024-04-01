import React from 'react';
import { Footer } from 'flowbite-react';
import { FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa"; // Import Instagram, Discord, and YouTube icons

function FooTer() { // Remove 'year' from props
  return (
    <Footer container className="dark-text footer"> {/* Add the "footer" class */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
       <div style={{ textAlign: 'left' }}>
          <h3>Logo</h3>
          <p>lorem ipsum dolor sit amet,</p>
          <p>consectetur adipiscing elit.</p>
         
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3>About</h3>
          <p>Product</p>
          <p>Resource</p>
          <p>Term & condition</p>
          <p>FAQ</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3>Company</h3>
          <p>Our Team</p>
          <p>Partner with Us</p>
          <p>Privacy & Policy</p>
          <p>Features</p>
        </div>
        <div style={{ textAlign: 'right' }}>
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

import React from 'react';
import { Link } from 'react-router-dom';
import './social.css'; // Import the CSS file

const Social = () => {
  const socialLinks = [
    { href: 'https://www.facebook.com/ezlegal.id', title: 'Facebook', icon: 'fab fa-facebook-f', username:'ezlegal.id' },
   
    { href: 'https://www.instagram.com/ezlegal.id', title: 'Instagram', icon: 'fab fa-instagram', username:'ezlegal.id' },

  ];

  return (
    <div className="ltn__social-media footer-menu go-top">
      <ul className="social-icons">
        {socialLinks.map((link) => (
          <li key={link.href} style={{color:'#004391'}}>
            <a href={link.href} title={link.title}>
              <i className={link.icon} style={{color:'#004391'}}></i> {link.username}
            </a>
			
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Social;
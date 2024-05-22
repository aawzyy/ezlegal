import React from 'react';
import { Link } from 'react-router-dom';
import './social.css'; // Import the CSS file

const Social = () => {
  const socialLinks = [
    { href: 'https://www.facebook.com/tuna-theme', title: 'Facebook', icon: 'fab fa-facebook-f', username:'trillion' },
    { href: 'https://www.twitter.com/tuna-theme', title: 'Twitter', icon: 'fab fa-twitter', username:'trillion' },
    { href: 'https://www.instagram.com/tuna-theme', title: 'Instagram', icon: 'fab fa-instagram', username:'trillion' },
    { href: 'https://www.dribble.com/tuna-theme', title: 'Dribbble', icon: 'fab fa-dribbble', username:'trillion'},
  ];

  return (
    <div className="ltn__social-media footer-menu go-top">
      <ul className="social-icons">
        {socialLinks.map((link) => (
          <li key={link.href} style={{color:'black'}}>
            <Link to={link.href} title={link.title}>
              <i className={link.icon} style={{color:'black'}}></i> {link.username}
            </Link>
			
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Social;
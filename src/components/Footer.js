import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const scrollPosition = window.scrollY + window.innerHeight;
      // Calculate the height of the entire document
      const pageHeight = document.documentElement.scrollHeight;

      // If the user is within a certain distance from the bottom, show the footer
      if (scrollPosition >= pageHeight - 100) { // 100px from the bottom
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  return (
    <footer className={`footer ${showFooter ? 'show' : ''}`}>
      <p>© 2024 Thrift Treaure. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
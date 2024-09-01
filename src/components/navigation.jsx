import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Navigation() {
  const [activeLink, setActiveLink] = useState(); // Track the active link
  
  useEffect(() => {
    // Highlight the "About Me" link on initial load
    const aboutMeLink = document.getElementById('navLink1');
    if (aboutMeLink) {
      aboutMeLink.classList.add('nav-active');
      setActiveLink(aboutMeLink);
    }
  }, []);

  function highlightLink(event) {

    console.log(activeLink)
    // Remove the 'nav-active' class from the previously active link
    if (activeLink) {
      activeLink.classList.remove('nav-active');
    }

    // Add the 'nav-active' class to the clicked link
    event.target.classList.add('nav-active');

    // Update the activeLink state to the clicked link
    setActiveLink(event.target);
  }

  function Navbar({ links }) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          {links.map((link) => link)}
        </ul>
      </nav>
    );
  }

  return (
    <Navbar
      links={[
        <Link
          key={1}
          onClick={highlightLink}
          id="navLink1"
          to="/about-me"
          className={activeLink?.id === 'navLink1' ? 'nav-active' : ''}
        >
          About Me
        </Link>,
        <Link
          key={2}
          onClick={highlightLink}
          id="navLink2"
          to="/portfolio"
          className={activeLink?.id === 'navLink2' ? 'nav-active' : ''}
        >
          Portfolio
        </Link>,
        <Link
          key={3}
          onClick={highlightLink}
          id="navLink3"
          to="/contact"
          className={activeLink?.id === 'navLink3' ? 'nav-active' : ''}
        >
          Contact Me
        </Link>,
        <Link
          key={4}
          onClick={highlightLink}
          id="navLink4"
          to="/resume"
          className={activeLink?.id === 'navLink4' ? 'nav-active' : ''}
        >
          Resume
        </Link>,
      ]}
    />
  );
}

export default Navigation;

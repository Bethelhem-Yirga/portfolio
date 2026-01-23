import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme, setSearchTerm }) => {
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value); // Update searchTerm state in App.js
    };

    const handleLinkClick = (linkName) => {
        console.log(`Navigating to ${linkName}`);
    };

    return (
        <nav>
            <Link to="/" onClick={() => handleLinkClick('Home')}>Home</Link>
            <Link to="/about" onClick={() => handleLinkClick('About Me')}>About Me</Link>
            <Link to="/projects" onClick={() => handleLinkClick('Projects')}>Projects</Link>
            <Link to="/contact" onClick={() => handleLinkClick('Contact')}>Contact</Link>

            <input
                type="text"
                onChange={handleInputChange} // Ensure this is correct
                placeholder="Search projects..."
            />

            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </nav>
    );
};

export default Navbar;
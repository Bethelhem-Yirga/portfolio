import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchInput = styled.input`
    padding: 0.5em;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-left: 0.5em;
    transition: border-color 0.3s;
    width: 150px; /* Adjust width as necessary */

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

const Navbar = ({ theme, toggleTheme, setSearchTerm }) => {
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* SVG Search Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                    style={{ width: '20px', height: '20px', marginRight: '0.5em' }} // Adjust size as needed
                >
                    <path
                        d="M10.5 2a8.5 8.5 0 1 0 5.707 14.206l5.147 5.147a1 1 0 0 0 1.414-1.414l-5.147-5.147A8.5 8.5 0 0 0 10.5 2zm0 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z"
                        fill="#000" // You can adjust the color here
                    />
                </svg>
                <SearchInput
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Search projects..."
                />
            </div>

            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </nav>
    );
};

export default Navbar;
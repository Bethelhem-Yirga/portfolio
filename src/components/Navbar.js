import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </nav>
    );
};

export default Navbar;
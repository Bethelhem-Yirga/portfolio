import { useState } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState('light');
    const [searchTerm, setSearchTerm] = useState(''); // Ensure this is defined

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Router>
            <div className={theme}>
                <Navbar theme={theme} toggleTheme={toggleTheme} setSearchTerm={setSearchTerm} />
                <Routes>
                    <Route path="/" element={<h1>Welcome to My Portfolio</h1>} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects searchTerm={searchTerm} />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
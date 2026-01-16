import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Routes> {/* Use Routes instead of Switch */}
                <Route path="/" element={<h1>Welcome to My Portfolio</h1>} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    </Router>
);

export default App;
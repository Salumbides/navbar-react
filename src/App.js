// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Define the components for the pages
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function NavBar() {
  const location = useLocation(); // to get the current location for active link

  return (
    <nav>
      <ul>
        <li>
          <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
        </li>
        <li>
          <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">About</Link>
        </li>
        <li>
          <Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

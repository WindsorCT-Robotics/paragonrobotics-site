import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav id="navbar">
        <Link to="/">Home</Link>- 
        <Link to="/Robots">Robots</Link>
      </nav>
      <Routes>
        <Route path="/Robots" element={<Robots />} />
      </Routes>
    </Router>
  );
}

function Robots() {
  return (
    <div id="robots-header">
      <h2>Robots</h2>
      <div>
        <h3>Hi-fi</h3>
        <img src="/images/2024-robot.png" alt="Robot" />
      </div>
    </div>
  );
}

export default App;

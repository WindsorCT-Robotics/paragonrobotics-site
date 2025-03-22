import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import logoImage from './assets/textlesslogo.png';

function App() {
  return (
    <div className="bod"> 
      <center>
        <Router>
          <nav id="navbar">
            <Link className="link-styles" to="/">Home</Link> 
            <Link className="link-styles" to="/Robots">Robots</Link>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Robots" element={<Robots />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </center> 
    </div>
  );
}

function Home() {
  return (
    <div>
       <img src={logoImage} alt="logo" id="logoImage"></img>
      <h1>hello</h1>
    </div>
  );
}

function Robots() {
  return (
    <div id="robots-header">
      <div className="centered-content">
        <h2>Robots</h2>
        <div id="hifi">
          <h3>Hi-fi</h3>
          <img id="img" src="/images/2024-robot.png" alt="Robot" />
        </div>  
      </div>
    </div>
  );
}



export default App;

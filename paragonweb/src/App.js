import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logoImage from './assets/textlesslogo.png';

function App() {
  return (
    <Router>
      <div className="bod">
        <nav id="navbar">
          <img src={logoImage} alt="logo" id="logoImage" />
          <Link className="link-styles" to="/">Home</Link>
          <Link className="link-styles" to="/robots">Robots</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Paragon Robotics!</h1>

      <div id="MS"><h3>Mission Statement</h3>
      
      <p>Paragon
Robotics aims to equip students with the knowledge, skills, and confidence to solve
problems through competitive design challenges.&nbsp;
We use mentor-led hands-on engineering to build not just robots, but creativity,
teamwork, and leadership.</p>
      
      </div>

      
      <div id="about"><h3>About Our Team</h3>
      
      <p id="p-text">Paragon Robotics ​is 501.c.3 nonprofit community team located in Windsor, CT comprised of high school students from Windsor and the surrounding area. The team was founded in 2001 and prides itself on giving every student the opporunity to pursue their interests with hands-on, real world engineering design and manufacturing experiences.&nbsp; We are relatively small team but that affords us the flexibility to give every student unique attention.</p>
      
      </div>
    </div>
  );
}

function Robots() {
  return (
    <div className="robots-container">
      <h2 className="robots-title">Robots</h2>
      <div id="mazu">
        <h3>Mazu</h3><p>2025</p>
        <img id="img" src="/images/2025-robot.jpeg" alt="Robot25" />
      </div>
      <div id="hifi">
        <h3>Hi-fi</h3><p>2024</p>
        <img id="img" src="/images/2024-robot.png" alt="Robot24" />
      </div>
       <div id="twtr">
        <h3>Robot</h3><p>2023</p>
        <img id="img" src="/images/2023-robot.jpg" alt="Robot25" />
      </div>
    </div>
  );
}

export default App;

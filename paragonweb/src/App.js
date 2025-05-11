import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logoImage from './assets/textlesslogo.png';
import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <div className="bod">
        <nav id="navbar">
          <img src={logoImage} alt="logo" id="logoImage" />

          <div className="hamburger" onClick={toggleMenu}>
            &#9776;
          </div>

          <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            <Link className="link-styles" to="/" onClick={closeMenu}>Home</Link>
            <Link className="link-styles" to="/robots" onClick={closeMenu}>Robots</Link>
            <Link className="link-styles" to="/subteams" onClick={closeMenu}>Subteams</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="/subteams" element={<Subteams />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
function Home() {
  const sections = [
    {
      title: "Mission Statement",
      content: "Paragon Robotics equips students with the knowledge, skills, and confidence to work in various STEM-related fields."
    },
    {
      title: "About Our Team",
      content: "Paragon Robotics is a 501(c)(3) nonprofit community team located in Windsor, CT. Our students talents include a wide range of engineering topics from CAD work to Manufacturing."
    },
    {
      title: "Community Service",
      content: "We aim to make a positive impact through volunteering and outreach. We host numerous can drives throughout the year and we assist with local community events."
    }
  ];
  
  return (
    <div className="home-layout">
      <h1>Welcome to Paragon Robotics!</h1>
      <div className="center-title">
        
      </div>
      <div className="side-container">
        {sections.map((section, index) => (
          <div key={index} className="side-box">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


function Robots() {
  return (
    <div className="robots-container">
      <h1 className="robots-title">Robots</h1>
      <div className="robot-card">
        <h3>Mazu</h3><p>2025</p>
        <img id="img" src="/images/2025-robot.jpeg" alt="Robot25" />
      </div>
      <div className="robot-card">
        <h3>Hi-fi</h3><p>2024</p>
        <img id="img" src="/images/2024-robot.png" alt="Robot24" />
      </div>
       <div className="robot-card">
        <h3>Reddy</h3><p>2023</p>
        <img id="img" src="/images/2023-robot.jpg" alt="Robot23" />
      </div>
      <div className="robot-card">
        <h3>Rebel</h3><p>2020</p>
        <img id="img" src="/images/2020-robot.JPG" alt="Robot20" />
      </div>
      <div className="robot-card">
        <h3>MongoBot</h3><p>2006-2012</p>
        <img id="img" src="/images/mongobot.jpeg" alt="mongobot" />
      </div>
      <div className="robot-card">
        <h3>Sprocket</h3><p>2018</p>
        <img id="img" src="/images/2018-robot.JPEG" alt="Robot18" />
      </div>
      <div className="robot-card">
        <h3>Dr. Seuss</h3><p>2014</p>
        <img id="img" src="/images/2014-robot.jpeg" alt="Robot14"/>
      </div>
      <div className="robot-card">
        <h3>Nemo</h3><p>2013</p>
        <img id="img" src="/images/2013-robot.jpeg" alt="Robot13" />
      </div>
      <div className="robot-card">
        <h3>Metal Arc</h3><p>2012</p>
        <img id="img" src="/images/2012-robot.jpeg" alt="Robot12" />
      </div>
      <div className="robot-card">
        <h3>Blue Cyclone</h3><p>2011</p>
        <img id="img" src="/images/2011-robot.jpeg" alt="Robot11" />
      </div>
      <div className="robot-card">
        <h3>Techno Drifter</h3><p>2009</p>
        <img id="img" src="/images/2009-robot.jpeg" alt="Robot09" />
      </div>
      <div className="robot-card">
        <h3>Guido</h3><p>2013</p>
        <img id="img" src="/images/2008-robot.jpeg" alt="Robot08" />
      </div>
      <div className="robot-card">
        <h3>Spyro</h3><p>2006</p>
        <img id="img" src="/images/2006-robot.jpeg" alt="Robot06" />
      </div>
    </div>
  );
}

function Subteams() {
  return (
    <div className="subteams-container">
      <div className="subteam-section">
        <img src="/images/build2.jpg" alt="Build team working" />
        <div id="topText"><h2>Build</h2></div>
        <div>
          
          <p>
            The Build team subgroup of Team Paragon designs and builds the robot. 
            Due to the annually-changing rules of the game, the Build team is required 
            to plan a different robot every year. The group also builds a prototype if 
            time permits. Using all the tools at their disposal, the team builds the most 
            efficient robot that they can. The Build team is in charge of the wiring of the 
            components in the robot. The Build team is responsible for all of the 
            non-cosmetic hardware in the robot.
          </p>
        </div>
      </div>

      <div className="subteam-section">
        <img src="/images/programming.jpeg" alt="Programming team in action" />
        <div id="topText"><h2>Programming</h2></div>
        <div>
          <p>
            The programming subgroup writes software that controls the robot in the 
            tele-operational and autonomous phases of the competition. Every year 
            the Programming team has to program the robot to follow the chosen strategy.
            The code is split up into multiple pieces and each member of the programming 
            team writes one or more pieces in order to work efficiently. This team is 
            responsible for all the software in the robot.
          </p>
        </div>
      </div>
    </div>
  );
}


export default App;

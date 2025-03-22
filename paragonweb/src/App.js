import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav id="navbar">
        <Link to="/">Home</Link>- 
        <Link to="/robots">Robots</Link>
      </nav>
      <Routes>
        <Route path="/robot"></Route>
      </Routes>
    </Router>

  );
}

function robots() {
  return (
    <div>
      <h2>Robots</h2>
    </div>
  )
}
export default App;

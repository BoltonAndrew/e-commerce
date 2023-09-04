import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(25);

  return (
    <Router className="App">
      <h1>E-Commerce</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

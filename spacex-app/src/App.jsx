// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Launches from "./pages/Launches";
import Rockets from "./pages/Rockets";
import Capsules from "./pages/Capsules";
import Dragons from "./pages/Dragons";
import Missions from "./pages/Missions";
import Crew from "./pages/Crew";
import DetailPage from "./pages/DetailPage";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/launches">Lanzamientos</Link>
        <Link to="/rockets">Cohetes</Link>
        <Link to="/capsules">Cápsulas</Link>
        <Link to="/dragons">Dragones</Link>
        <Link to="/missions">Misiones</Link>
        <Link to="/crew">Tripulación</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/:category/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

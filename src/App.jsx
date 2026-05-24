import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import TravelerMap from "./pages/TravelerMap";
import Yearbook from "./pages/Yearbook";
import Resources from "./pages/Resources";
import Assistant from "./pages/Assistant";
import Community from "./pages/Community";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/map" element={<TravelerMap />} />
        <Route path="/yearbook" element={<Yearbook />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
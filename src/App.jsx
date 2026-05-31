import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import TravelerMap from "./pages/TravelerMap";
import Yearbook from "./pages/Yearbook";
import Resources from "./pages/Resources";
import Assistant from "./pages/Assistant";
import Community from "./pages/Community";
import SamProfile from "./pages/SamProfile";
import InTransit from "./pages/InTransit";

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
        <Route path="/sam-profile" element={<SamProfile />} />
        <Route path="/in-transit" element={<InTransit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import MainModeler from "./pages/MainModeler/MainModeler.jsx";
import MainWebDev from "./pages/MainWebDev/MainWebDev.jsx";
import ModelerWorks from "./pages/ModelerPortfolio/ModelerWorks.jsx";

const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/3d-artist" element={<MainModeler />} />
      <Route path="/web-dev" element={<MainWebDev />} />
      <Route path="/3d-artist/works/:id" element={<ModelerWorks />} />
    </Routes>
  );
};

export default RoutesPath;

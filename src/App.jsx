import "./App.css";
import { Route, Routes } from "react-router-dom";
import CenterLayout from "./assets/layouts/CenterLayout";
import PortalLayout from "./assets/layouts/PortalLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CenterLayout />} />
      <Route path="/portal" element={<PortalLayout />} />
    </Routes>
}

export default App;  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Base from "./pages/Base";
import Interface from "./pages/Interface";

import './App.css';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/interface" element={<Interface />} />
          </Routes>
    </Router>
    </>
  );
}

export default App;

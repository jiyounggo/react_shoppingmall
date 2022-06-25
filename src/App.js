import Navbars from "./components/header.js";
import Main from "./pages/main.js";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbars />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;

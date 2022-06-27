import Navbars from "./components/header.js";
import Main from "./pages/Main.js";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail.js";
import Item from "./data/Item.js";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbars />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

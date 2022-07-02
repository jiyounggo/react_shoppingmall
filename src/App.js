import Navbar from "./components/header.js";
import Main from "./pages/Main.js";
import { useNavigate, Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail.js";
import Find from "./components/find.js";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Data from "./data/Data.js";

function App() {
  let [items, setitems] = useState(Data);
  let [item] = useState(Data);
  const navigate = useNavigate();
  let [search, setsearch] = useState([]);
  let [입력값, 입력값변경] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    axios
      .all([
        axios.get("https://codingapple1.github.io/shop/data2.json"),
        axios.get("https://codingapple1.github.io/shop/data3.json"),
      ])
      .then(
        axios.spread((res1, res2) => {
          const rest = res1.data;
          const resr = res2.data;
          const res = [...item, ...rest, ...resr];
          setitems(res);
        })
      );
  }, []);
  return (
    <div>
      <Navbar />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (입력값 === "") {
            alert("글자를 입력하세요");
          } else if (입력값.length < 2) {
            alert("한글자이상 입력해주세요");
          } else if (입력값 !== "") {
            입력값변경("");
            let 찾은상품 = items.filter((x) =>
              x.title.match(new RegExp(입력값, "i"))
            );
            navigate("/find");

            setsearch(찾은상품);
          }
        }}
      >
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
          ref={inputRef}
          value={입력값}
          placeholder="검색하세용"
        ></input>
        <button onClick={() => {}}>댓글</button>
      </form>
      <Routes>
        <Route path="/" element={<Main items={items} />} />
        <Route path="/detail/:id" element={<Detail items={items} />} />
        <Route path="/find" element={<Find search={search} />} />
      </Routes>
    </div>
  );
}

export default App;

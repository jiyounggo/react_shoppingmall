import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Data from "../data/Data.js";
export default function Test() {
  let [item, setitem] = useState(Data);
  useEffect(() => {
    axios
      .get("https://codingapple1.github.io/shop/data3.json")
      .then((result) => {
        let copy = [...item, ...result.data];
        setitem(copy);
        console.log(item);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const move = () => {
    navigate("/detail", {
      state: {
        title: `${item[2].title}`,
        price: "개발자dd",
      },
    });
  };
  return (
    <div>
      <button onClick={move}>버튼</button>
    </div>
  );
}

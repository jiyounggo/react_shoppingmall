import React from "react";
import { useState, useEffect } from "react";
import "../style/App.css";
import Slider from "../components/slider.js";
import Data from "../data/Data.js";
import axios from "axios";
import { useNavigate, Route, Link, Routes, useParams } from "react-router-dom";
import Detail from "../pages/Detail.js";

function Main() {
  let [item, setitem] = useState(Data);
  let [버튼, 버튼변경] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <Slider />
      <div className="item">
        {item.map((a, i) => {
          return (
            <div
              onClick={() =>
                navigate(`/detail/${a.id}`, {
                  state: {
                    title: `${item[i].title}`,
                    price: `${item[i].price}`,
                    content: `${item[i].content}`,
                    id: `${item[i].id}`,
                  },
                })
              }
              className="items"
              key={i}
            >
              <Card item={item[i]} i={i}></Card>
            </div>
          );
        })}
      </div>
      <button
        className="addBt"
        onClick={() => {
          버튼변경(버튼 + 1);
        }}
      >
        더보기
      </button>
      <Clicks 버튼={버튼} item={item} setitem={setitem}></Clicks>
    </div>
  );
}
function Clicks(props) {
  useEffect(() => {
    if (props.버튼 == 1) {
      axios
        .get("https://codingapple1.github.io/shop/data2.json")
        .then((result) => {
          let copy = [...props.item, ...result.data];
          props.setitem(copy);
        })
        .catch((err) => console.log(err));
    }
    if (props.버튼 == 2) {
      axios
        .get("https://codingapple1.github.io/shop/data3.json")
        .then((result) => {
          let copy = [...props.item, ...result.data];
          props.setitem(copy);
        })
        .catch((err) => console.log(err));
    }
  }, [props.버튼]);

  if (props.버튼 == 3) {
    return alert("상품이 더 없습니다");
  }
}
function Card(props) {
  return (
    <div>
      <img
        className="itemIMG"
        src={process.env.PUBLIC_URL + "img/clothes" + props.i + ".png"}
      ></img>
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
    </div>
  );
}

export default Main;

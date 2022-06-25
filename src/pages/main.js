import React from "react";
import { useState, useEffect } from "react";
import "../style/App.css";
import Slider from "../components/slider.js";
import Data from "../data/data.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

function Main() {
  let [item, setitem] = useState(Data);
  let [버튼, 버튼변경] = useState(0);
  return (
    <div>
      <Slider />
      <div className="item">
        {item.map((a, i) => {
          return (
            <div className="items" key={i}>
              <Link to={`/detail/${a.id}`}>
                <Card item={item[i]} i={i}></Card>
              </Link>
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

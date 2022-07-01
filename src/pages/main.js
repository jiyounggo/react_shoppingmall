import React from "react";
import { useState } from "react";
import "../style/App.css";
import Slider from "../components/slider.js";
import Data from "../data/Data.js";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.js";

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
      <Button 버튼={버튼} item={item} setitem={setitem}></Button>
    </div>
  );
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

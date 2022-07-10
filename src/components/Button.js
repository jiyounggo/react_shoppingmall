import axios from "axios";
import { useEffect } from "react";

function BtClick(props) {
  useEffect(() => {
    props.버튼변경(false);
  }, [props.버튼 == 3]);

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

export default BtClick;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import { addCount, addItem } from "../reducer/store.js";
import { useLocation } from "react-router-dom";

export default function Detail() {
  let { id } = useParams();
  const location = useLocation();

  const title = location.state.title;
  const price = location.state.price;
  const content = location.state.content;

  //   let state = useSelector((state) => {
  //     return state.cart;
  //   });
  return (
    <div className="row">
      <div className="col-md-6">
        <img src={process.env.PUBLIC_URL + "/img/clothes" + id + ".png"}></img>
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{title}</h4>
        <p>{content}</p>
        <p>{price}</p>
        {/* <button
            onClick={() => {
              let dupValue = state.findIndex((a) => {
                return a.id === props.pat[id].id;
              });
              console.log(dupValue);

              dupValue === -1
                ? dispatch(
                    addItem({
                      id: props.pat[id].id,
                      name: props.pat[id].title,
                      price: props.pat[id].price,
                      count: 1,
                    })
                  )
                : dispatch(addCount(props.pat[id].id));
              swal({
                title: "장바구니에 잘 담겼어요!",
                icon: "success",
                buttons: {
                  showCart: { text: "장바구니 이동", value: "showCart" },
                  cancel: "쇼핑 계속하기",
                },
              }).then((value) => {
                switch (value) {
                  case "showCart":
                    navigate("/cart");
                    break;
                }
              });
            }}
            className="btn btn-danger"
          >
            주문하기
          </button> */}
        {/* {Text} */}
      </div>
    </div>
  );
}

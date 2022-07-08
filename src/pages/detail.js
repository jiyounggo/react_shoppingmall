import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCount, addItem } from "../reducer/store.js";

function Detail(props) {
  const [Text, setText] = useState("");
  let state = useSelector((state) => {
    return state.cart;
  });

  let { id } = useParams();
  let [탭, 탭변경] = useState(0);
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let [watchItem, setWatch] = useState([]);
  let 찾은상품 = props.items.find((x) => x.id == id);
  console.log(찾은상품);
  useEffect(() => {
    let watch = localStorage.getItem("watched");
    if (watch == null) {
      watch = [];
    } else {
      watch = JSON.parse(watch);
      console.log(watch.length);
    }
    watch.push(id);
    if (watch.length >= 3) {
      watch = new Set(watch);
      watch = [...watch];
      console.log(watch);
    }
    localStorage.setItem("watched", JSON.stringify(watch));
    setWatch(watch);
    console.log(watchItem);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              process.env.PUBLIC_URL +
              "/img/clothes" +
              props.items[id].id +
              ".png"
            }
          ></img>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.items[id].title}</h4>
          <p>{props.items[id].content}</p>
          <p>{props.items[id].price}</p>
          <button
            onClick={() => {
              let dupValue = state.findIndex((a) => {
                return a.id === props.items[id].id;
              });
              console.log(dupValue);

              dupValue === -1
                ? dispatch(
                    addItem({
                      id: props.items[id].id,
                      name: props.items[id].title,
                      price: props.items[id].price,
                      count: 1,
                    })
                  )
                : dispatch(addCount(props.items[id].id));
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
          </button>
          {Text}
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              탭변경(0);
            }}
          >
            상세정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              탭변경(1);
            }}
          >
            리뷰
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              탭변경(2);
            }}
          >
            Q&A
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link3"
            onClick={() => {
              탭변경(3);
            }}
          >
            반품/교환정보
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tabcontent 탭={탭} />
    </div>
  );
}
function Tabcontent(props) {
  let [입력값, 입력값변경] = useState("");
  let [글제목, 글제목변경] = useState([]);

  if (props.탭 == 0) {
    return <div>내용0</div>;
  }
  if (props.탭 == 1) {
    return <div>내용1</div>;
  }
  if (props.탭 == 2) {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (입력값 === "") {
              alert("글자를 입력하세요");
              return;
            } else {
              글제목변경([입력값, ...글제목]);
              입력값변경("");
            }
          }}
        >
          <input
            onChange={(e) => {
              입력값변경(e.target.value);
            }}
            value={입력값}
          ></input>
          <button
            onClick={() => {
              // let copy = [...글제목];
              // copy.unshift(입력값);
              // 글제목변경(copy);
            }}
          >
            댓글
          </button>
        </form>
        {글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4>{글제목[i]}</h4>
              <button
                onClick={() => {
                  let copy = [...글제목];
                  copy.splice(i, 1);
                  글제목변경(copy);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>
    );
  }
  if (props.탭 == 3) {
    return <div>내용3</div>;
  }
}

export default Detail;

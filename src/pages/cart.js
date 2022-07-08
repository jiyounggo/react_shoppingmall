import { Table } from "react-bootstrap";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addCount, deltetItem } from "../reducer/store.js";

let Box = styled.div`
  color: grey;
  padding: 20px;
  width: 80%;
  text-align: center;
  margin: 20px;
`;

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  // let states =
  // useSelector((state) => { return state.cart[0].price *state.cart[0].count})
  // let states1 = useSelector((state) => { return state.cart[1].price *state.cart[1].count})
  let dispatch = useDispatch();

  let total = state.cart.reduce(
    (accu, cart) => accu + cart.price * cart.count,
    0
  );

  return (
    <Box>
      <Table striped>
        <thead>
          <tr>
            <th>상품번호</th>
            <th>상품정보</th>
            <th>판매가</th>
            <th>수량</th>
            <th>갯수</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].price * state.cart[i].count}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id));
                    //  let total =(`${state.cart[i].price * state.cart[i].count}`)
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(deltetItem(state.cart[i].id));
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
          총금액 : {total}
        </tbody>
      </Table>
    </Box>
  );
}

export default Cart;

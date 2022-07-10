import styled from "@emotion/styled";

const WatchItem = styled.div`
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 10;
  width: 10em;
  height: 30em;
  background-color: beige;
  z-index: 2;
  #img {
    text-align: center;
  }
  p {
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
  }
  img {
    width: 9em;
    height: 9em;
  }
`;

export { WatchItem };

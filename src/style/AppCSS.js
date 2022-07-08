import styled from "@emotion/styled";

const WatchItem = styled.div`
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 10;
  width: 15%;
  height: auto;
  background-color: beige;
  z-index: 2;
  p {
    margin-bottom: 0;
    text-align: center;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

export { WatchItem };

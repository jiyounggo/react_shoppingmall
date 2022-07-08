import styled from "@emotion/styled";

const Item = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
  #items {
    margin-left: 20px;
    margin-top: 100px;
  }
`;

const MoreBt = styled.button`
  margin: auto;
  position: relative;
  border-radius: 10px;
  top: 5em;
  left: 50%;
  }
`;

const ItemIMG = styled.img`
width: 20em;
  height: 25em;
  }
`;
export { Item, MoreBt, ItemIMG };

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Find() {
  const {
    state: { query },
  } = useLocation();
  console.log(query);
  return (
    <div>
      {query.입력값 !== query[0]?.title ? (
        <div>
          {query.map((a, i) => {
            return (
              <Link to={`/detail/${a.id}`} className="items" key={i}>
                <img
                  className="itemIMG"
                  src={process.env.PUBLIC_URL + 'img/clothes' + a.id + '.png'}
                ></img>
                <h4 className="pt-5">{a.title}</h4>
                <p>{a.content}</p>
                <p>{a.price}</p>
              </Link>
            );
          })}{' '}
        </div>
      ) : (
        <p>상품이없습니다</p>
      )}
    </div>
  );
}

export default Find;

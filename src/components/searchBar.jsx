import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import UseFetch from '../hooks/useFetch';

function SearchBar() {
  let [search, setsearch] = useState([]);
  let [입력값, 입력값변경] = useState('');

  const inputRef = useRef();
  const getData = UseFetch();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const navigate = useNavigate();
  console.log(search);
  console.log(입력값);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (입력값 === '') {
            alert('글자를 입력하세요');
          } else if (입력값.length < 2) {
            alert('한글자이상 입력해주세요');
          } else if (입력값 !== '') {
            입력값변경('');
            let 찾은상품 = getData.filter(x => x.title.match(new RegExp(입력값, 'i')));
            setsearch(찾은상품);
            navigate('/find', { state: { query: 찾은상품 } });
          }
        }}
      >
        <input
          onChange={e => {
            입력값변경(e.target.value);
          }}
          ref={inputRef}
          value={입력값}
          placeholder="검색하세용"
        ></input>
        <button onClick={() => {}}>댓글</button>
      </form>
    </div>
  );
}

export default SearchBar;

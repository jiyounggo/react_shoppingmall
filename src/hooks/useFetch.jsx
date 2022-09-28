import axios from 'axios';
import { useState, useEffect } from 'react';
import Data from '../data/data';

export default function UseFetch() {
  let [items, setitems] = useState(Data);

  useEffect(() => {
    axios
      .all([
        axios.get('https://codingapple1.github.io/shop/data2.json'),
        axios.get('https://codingapple1.github.io/shop/data3.json'),
      ])
      .then(
        axios.spread((res1, res2) => {
          const rest = res1.data;
          const resr = res2.data;
          const res = [...items, ...rest, ...resr];
          setitems(res);
        })
      );
  }, []);

  return items;
}

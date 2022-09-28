import Navbar from './components/header.js';
import Main from './pages/main.js';
import { Route, Routes, Link } from 'react-router-dom';
import Detail from './pages/detail.js';
import Find from './pages/find';

import { useEffect, useState } from 'react';
import Data from './data/data.js';
import Cart from './pages/cart.js';
import Login from './components/User/Login.js';
import Register from './components/User/Register.js';
import { loginUser, clearUser } from './reducer/user.js';
import { useDispatch } from 'react-redux';
import firebase from './firebase.js';
import { WatchItem } from './style/AppCSS.js';
import UseFetch from './hooks/useFetch.jsx';

function App() {
  let [watchItem, setWatch] = useState([]);
  const dispatch = useDispatch();

  const GetData = UseFetch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(userInfo => {
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  useEffect(() => {
    setWatch(JSON.parse(localStorage.getItem('watched')));
  }, []);

  return (
    <div>
      <Navbar />
      <WatchItem>
        <p>최근 본 상품</p>
        {watchItem &&
          watchItem.map(item => {
            if (watchItem.length > 3) {
              let copy = [...watchItem];
              copy.shift();
              setWatch(copy);
            } else {
              return (
                <div id="img" key={item}>
                  <Link to={'/detail/' + item}>
                    <img src={process.env.PUBLIC_URL + 'img/clothes' + [item] + '.png'} />
                  </Link>
                </div>
              );
            }
          })}
      </WatchItem>

      <Routes>
        <Route path="/" element={<Main items={GetData} />} />
        <Route path="/detail/:id" element={<Detail items={GetData} />} />
        <Route path="/find" element={<Find />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

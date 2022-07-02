import React, { useState } from "react";

import { LoginDiv } from "../../style/UserCSS.js";
import { useNavigate } from "react-router-dom";
import firebase from "../../firebase.js";

function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const [PWconfirm, setPWconfirm] = useState("");
  const [Flag, setFlag] = useState(false);

  const navigate = useNavigate();

  const RegisterFunction = async (e) => {
    // setFlag(true)
  };
  return (
    <LoginDiv>
      <form>
        <label>이름</label>
        <input
          type="name"
          value={Name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        <label>이메일</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <label>비밀번호</label>
        <input
          type="password"
          value={PW}
          minLength={8}
          onChange={(e) => {
            setPW(e.currentTarget.value);
          }}
        />
        <label>비밀번호확인</label>
        <input
          type="password"
          value={PWconfirm}
          minLength={8}
          onChange={(e) => {
            setPWconfirm(e.currentTarget.value);
          }}
        />
        {/* disabled={Flag} */}
        <button onClick={(e) => RegisterFunction(e)}>회원가입</button>
      </form>
    </LoginDiv>
  );
}

export default Register;

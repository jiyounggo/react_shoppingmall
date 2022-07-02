import React, { useState, userEffect, useEffect } from "react";
import { LoginDiv } from "../../style/UserCSS.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  // userEffect(()=>{
  //  setErrorMsg("");
  // },[ErrorMsg]);
  return (
    <LoginDiv>
      <form>
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
          onChange={(e) => {
            setPW(e.currentTarget.value);
          }}
        />
        {ErrorMsg != "" && <p>{ErrorMsg}</p>}
        <button
          onClick={(e) => {
            setPW(e.currentTarget.value);
          }}
        >
          로그인
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          회원가입
        </button>
      </form>
    </LoginDiv>
  );
}

export default Login;

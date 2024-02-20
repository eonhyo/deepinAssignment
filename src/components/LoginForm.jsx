import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __login } from "redux/modules/authSlice";
import { Title } from "style/componentsStyle/HeaderStyle";
import { ButtonDiv, FormDiv, LoginInput, SpanDiv, StBtn, StForm, StSpan } from "style/componentsStyle/LoginFormStyle";

function LoginForm({ setIsSignUp }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginBtnHandler = async (e) => {
    e.preventDefault();
    const userLoginData = {
      id: userId,
      password,
    };
    dispatch(__login(userLoginData));
  };

  return (
    <>
      <FormDiv>
        <StForm onSubmit={loginBtnHandler}>
          <Title> FANLETTER 작성을 위해 로그인해주세요 </Title>
          <LoginInput
            name="id"
            type="text"
            value={userId}
            onChange={function (e) {
              return setUserId(e.target.value);
            }}
            placeholder="아이디를 입력해주세요 (4~10글자)"
            minLength={4}
            maxLength={10}
          ></LoginInput>
          <LoginInput
            name="password"
            type="password"
            value={password}
            onChange={function (e) {
              return setPassword(e.target.value);
            }}
            placeholder="비밀번호를 입력해주세요 (4~15글자)"
            minLength={4}
            maxLength={15}
          ></LoginInput>
          <ButtonDiv>
            <StBtn type="submit">로그인</StBtn>
          </ButtonDiv>
          <SpanDiv>
            <StSpan onClick={() => setIsSignUp(false)}>
              회원이 아니신가요?
            </StSpan>
          </SpanDiv>
        </StForm>
      </FormDiv>
    </>
  );
}

export default LoginForm;


import React, { useState } from "react";
import { toast } from "react-toastify";
import { authApi } from "api/app";
import { ButtonDiv, FormDiv, LoginInput, SpanDiv, StBtn, StForm, StSpan } from "style/componentsStyle/LoginFormStyle";
import { Title } from "style/componentsStyle/HeaderStyle";

function SignupForm({ setIsSignUp }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");

  const signupBtnHandler = async (e) => {
    e.preventDefault();
    const userSignupData = {
      id: userId,
      password,
      nickname: nickName,
    };
    try {
      const { data } = await authApi.post("/register", userSignupData);
      if (data.success) {
        toast.success("회원가입이 완료되었습니다. 로그인해주세요!");
        setIsSignUp(true);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <FormDiv>
        <StForm onSubmit={signupBtnHandler}>
          <Title>❤️‍🔥 FANLETTER 작성을 위해 회원가입해주세요 ❤️‍🔥</Title>
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
          <LoginInput
            name="nickName"
            type="text"
            value={nickName}
            onChange={function (e) {
              return setNickName(e.target.value);
            }}
            placeholder="닉네임을 입력해주세요 (1~10글자)"
          ></LoginInput>
          <ButtonDiv>
            <StBtn type="submit">회원가입</StBtn>
          </ButtonDiv>
          <SpanDiv>
            <StSpan onClick={() => setIsSignUp(true)}>
              이미 회원이신가요?
            </StSpan>
          </SpanDiv>
        </StForm>
      </FormDiv>
    </>
  );
}

export default SignupForm;


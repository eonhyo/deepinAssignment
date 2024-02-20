import styled from "styled-components";


export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StForm = styled.form`
  background-color: #F72798;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 500px;
  color: black;
  padding: 35px 15px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 35px;
  text-align: center;
`;

export const LoginInput = styled.input`
  margin-bottom: 20px;
  padding: 12px 0px;
  background-color: #F72798;
  border-radius: 4px;
  &::placeholder {
    color: black;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StBtn = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  padding: 20px 35px;
`;

export const SpanDiv = styled.div`
  text-align: center;
  font-size: 16px;
  color: white;
  margin-top: 25px;
`;

export const StSpan = styled.span`
  user-select: none;
  cursor: pointer;
`;

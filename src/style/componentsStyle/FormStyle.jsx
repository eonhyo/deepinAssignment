import styled from "styled-components";

export const FanLetterFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FanLetterForm = styled.form`
  width: 500px;
  background-color: #F72798;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
`;

export const FanLetterSection = styled.section`
  margin-bottom: 10px;
  display: flex;
`;

export const FanLetterLabel = styled.label`
  color: black;
  width: 100px; 
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const StNickName = styled.span`
  color: black;
  margin-bottom: 5px;
  font-weight: 700;
`;

export const ContextText = styled.textarea`
  resize: none;
  height: 80px;
  width: 100%;
  padding: 5px 10px 5px 10px;
`;

export const SubmitBtn = styled.button`
  font-size: 14px;
  padding: 5px 10px 5ps 10px;
  cursor: pointer;
  user-select: none;
  background-color: #EBF400;
  border-radius: 5px;
  text-align: right;
  border : none;
  color: white;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
  font-size: 19px;
  font-family: "Gaegu", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-weight: 700;
  &:hover {
    background-color: #F57D1F;

  }
`;

export const SubmitBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  
`;


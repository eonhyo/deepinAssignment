import styled from "styled-components";

export const StWholeBox = styled.div`
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const StDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 800px;
  min-height: 500px;
  border: 3px solid #F72798;
  padding: 16px;
  border-radius: 20px;
  color: white;
`;

export const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgNameDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ImgFigure = styled.figure`
  margin-right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const ImgStyle = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
`;

export const StNickName = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

export const StTime = styled.time`
  font-size: 17px;
`;

export const StTo = styled.p`
  padding-top: 12px;
  font-size: 25px;
  font-weight: 500;
`;

export const StContext = styled.p`
  background-color: #F72798;
  padding: 16px;
  font-size: 22px;
  line-height: 48px;
  border-radius: 20px;
  margin: 22px 10px;
  height: 275px;
  color: black;
  width: 750px;
`;

export const Textarea = styled.textarea`
  background-color: #F72798;
  padding: 16px;
  font-size: 22px;
  line-height: 48px;
  border-radius: 20px;
  margin: 22px 10px;
  height: 275px;
  color: black;
  width: 750px;
  resize: none;
`;

export const BtnSection = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

export const StBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  border: none;
  background-color: transparent;
`;

export const StBtn = styled.button`
  font-size: 25px;
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;
  background-color: #F72798;
  text-align: right;
  border-radius: 10px;
`;

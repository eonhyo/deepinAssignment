import styled from "styled-components";

export const FanLetterBox = styled.div`
  width: 100vh;
  margin: 0px auto 20px auto;
`;

export const FanLetterUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 540px;
  padding: 20px;
  border-radius: 5px;
  margin: 0px auto;
`;

export const FanLetterList = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 3px solid #F72798;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

export const InfoSection = styled.section`
  display: flex;
`;

export const ImgFigure = styled.figure`
  margin-right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const NameTimeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const FanLetterContext = styled.p`
  margin-left: 70px;
  margin-top: 5px;
  background-color: #F72798;
  border-radius: 10px;
  padding: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

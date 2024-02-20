import styled from "styled-components";

export const TitleBox = styled.header`
  background-image: url(https://thumb.mt.co.kr/06/2023/11/2023112011363778952_1.jpg/dims/optimize/);
  position: relative;
  width: 100%;
  height: 370px;
  background-size: 25%;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 70px;
  font-weight: bold;
  color: #F72798;
  min-width: 475px;
  text-align: center;
`;

export const NameBox = styled.ul`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  border: 3px solid #F72798;
  border-radius: 5px;
  list-style: none;
  padding: 15px;
  width: 500px;
`;

export const Name = styled.li`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid #F72798;
  border-radius: 5px;
  width: 100px;
  padding: 5px;
  text-align: center;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
  background-color: ${(props) => (props.clicked === "true" ? "#F72798" : "")};
  &:hover {
    background-color: #F72798;
  }
`;


import styled from "styled-components";

export const StNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7a7bb;
  width: 100%;
  color: black;
  height: 45px;
  user-select: none;

  a {
    text-decoration: none;
    color: inherit;
    margin-left: 20px;
  }

  div a {
    margin-right: 15px;
  }

  span {
    cursor: pointer;
    margin-right: 20px;
  }
`;

import styled from "styled-components";

export const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StMain = styled.main`
  width: 500px;
  background-color: #f7a7bb;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  color: black;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-top: 25px;
`;

export const Avatar = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-top: 30px;
`;

export const StLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px 5px;
`;
export const SaveImgBtn = styled.button`
  background-color: #f789a5;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 2px 5px;
  font-size: 15px;
  margin-top: 5px;
`;

export const NicknameInput = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  margin-top: 20px;
  font-size: 20px;
  padding: 2px 5px;
`;

export const StSpan = styled.span`
  font-size: 20px;
  margin-top: 20px;
`;

export const EditBtn = styled.button`
  background-color: #f789a5;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const CancelBtn = styled.button`
  background-color: #f789a5;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const CompleteBtn = styled.button`
  background-color: #f789a5;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 5px;
`;

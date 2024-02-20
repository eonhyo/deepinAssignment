import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import uuid from "react-uuid";
import { __addData } from "redux/modules/fanletterSlice";
import { ContextText, FanLetterForm, FanLetterFormDiv, FanLetterLabel, FanLetterSection, StNickName, SubmitBtn, SubmitBtnDiv } from "style/componentsStyle/FormStyle";
import defaultImg from "../assets/defaultImg.jpg";

function Form() {
  const [content, setContent] = useState("");
  const selectRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const date = new Date();
  const UpdataDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const selectArtist = () => {
    const selectedArtist = selectRef.current.value;
    return selectedArtist;
  };

  const newLetter = (e) => {
    e.preventDefault();
    if (!content) return toast.error("내용을 입력해주세요!");
    const newFanLetter = {
      createdAt: UpdataDate.toString(),
      nickname: user.nickname,
      avatar: user.avatar ?? defaultImg,
      content: content,
      writedTo: selectArtist(),
      id: uuid(),
      userId: user.userId,
    };
    dispatch(__addData(newFanLetter));
    setContent("");
  };
  return (
    <>
      <FanLetterFormDiv>
        <FanLetterForm onSubmit={newLetter}>
          <FanLetterSection>
            <FanLetterLabel>닉네임:</FanLetterLabel>
            <StNickName>{user.nickname}</StNickName>
          </FanLetterSection>
          <FanLetterSection>
            <FanLetterLabel>내용:</FanLetterLabel>
            <ContextText
              value={content}
              onChange={function (e) {
                return setContent(e.target.value);
              }}
              placeholder="최대 100자까지 작성할 수 있습니다."
              maxLength="100"
            ></ContextText>
          </FanLetterSection>
          <FanLetterSection>
            <FanLetterLabel style={{ width: "190px" }}>
              누구에게 보내실 건가요?
            </FanLetterLabel>
            <select onChange={selectArtist} ref={selectRef}>
              <option value="Jisoo">Jisoo</option>
              <option value="Jennie">Jennie</option>
              <option value="Rose">Rose</option>
              <option value="Lisa">Lisa</option>
            </select>
          </FanLetterSection>
          <SubmitBtnDiv>
            <SubmitBtn type="submit">등록하기</SubmitBtn>
          </SubmitBtnDiv>
        </FanLetterForm>
      </FanLetterFormDiv>
    </>
  );
}

export default Form;


import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __deleteData,
  __getData,
  __updateData,
} from "redux/modules/fanletterSlice";
import { BtnSection, ImgFigure, ImgNameDiv, ImgStyle, StBtnDiv, StContext, StDetailBox, StHeader, StNickName, StTime, StTo, StWholeBox, Textarea } from "style/pageStyle/DetailStyle";
import { StBtn } from "style/componentsStyle/LoginFormStyle";

function Detail() {
  const { letters, isLoading } = useSelector((state) => state.fanletter);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const myUserId = useSelector((state) => state.auth.user.userId);
  const [updateLetter, setUpdateLetter] = useState("");
  const [wantUpdate, setWantUpdate] = useState(false);

  const updateBtn = () => {
    if (updateLetter === content) alert("아무런 수정사항이 없습니다.");
    else {
      dispatch(__updateData({ id, updateLetter }));
      setWantUpdate(false);
      setUpdateLetter("");
      alert("수정하시겠습니까?");
      navigate("/");
    }
  };

  const deleteBtn = () => {
    dispatch(__deleteData(id));
    alert("삭제하시겠습니까?");
    navigate("/");
  };

  useEffect(() => {
    dispatch(__getData());
    
  }, [dispatch]);

  if (isLoading) {
    return <p>로딩중...</p>;
  }
  const { avatar, nickname, createdAt, writedTo, content, userId } =
    letters.find((fanletter) => fanletter.id === id);
  const isMine = myUserId === userId;

  return (
    <>
      <StWholeBox>
        <StDetailBox>
          <div>
            <StHeader>
              <ImgNameDiv>
                <ImgFigure>
                  <ImgStyle src={avatar}></ImgStyle>
                </ImgFigure>
                <StNickName>{nickname}</StNickName>
              </ImgNameDiv>
              <StTime>{createdAt}</StTime>
            </StHeader>
            <StTo>To: {writedTo}</StTo>
          </div>

          {wantUpdate ? (
            <>
              <Textarea
                autoFocus
                defaultValue={content}
                onChange={(e) => setUpdateLetter(e.target.value)}
              ></Textarea>
              <BtnSection>
                <StBtnDiv>
                  <StBtn onClick={() => setWantUpdate(false)}>취소</StBtn>
                </StBtnDiv>
                <StBtnDiv>
                  <StBtn onClick={updateBtn}>수정완료</StBtn>
                </StBtnDiv>
              </BtnSection>
            </>
          ) : (
            <>
              <StContext>{content}</StContext>
              {isMine && (
                <BtnSection>
                  <StBtnDiv>
                    <StBtn onClick={() => setWantUpdate(true)}>수정</StBtn>
                  </StBtnDiv>
                  <StBtnDiv>
                    <StBtn onClick={deleteBtn}>삭제</StBtn>
                  </StBtnDiv>
                </BtnSection>
              )}
            </>
          )}
        </StDetailBox>
      </StWholeBox>
    </>
  );
}

export default Detail;


import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import defaultImg from "../assets/defaultImg.jpg";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { editAvatar, editNickname } from "redux/modules/authSlice";
import { authApi } from "api/app";
import { Avatar, CancelBtn, CompleteBtn, EditBtn, NicknameInput, ProfileDiv, SaveImgBtn, StLabel, StMain, StSpan, Title } from "style/pageStyle/ProfileStyle";

function Profile() {
  const { avatar, nickname, userId } = useSelector((state) => state.auth.user);
  const accessToken = localStorage.getItem("accessToken");
  const [isEdit, setIsEdit] = useState(false);
  const [newNickname, setNewNickname] = useState();
  const [newAvatar, setNewAvatar] = useState(null);
  const dispatch = useDispatch();
  const [previewImg, setPreviewImg] = useState(null);
  const imgRef = useRef();

  const changeAvatar = () => {
    const imgFile = imgRef.current.files[0];
    setNewAvatar(imgFile);
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onloadend = () => {
      setPreviewImg(reader.result);
    };
  };

  const updataAvatar = async () => {
    const formData = new FormData();
    formData.append("avatar", newAvatar);
    try {
      const { data } = await authApi.patch("/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      toast.success("사진이 변경되었습니다.");
      dispatch(editAvatar(data.avatar));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const updateNickname = async () => {
    try {
      const { data } = await authApi.patch(
        "/profile",
        { nickname: newNickname },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      dispatch(editNickname(data.nickname));
      toast.success(data.message);
      setIsEdit(false);
    } catch (error) {
      toast.error("닉네임 변경사항이 없습니다.");
    }
  };

  return (
    <>
      <ProfileDiv>
        <StMain>
          <Title>{userId}님의 PROFILE</Title>

          <Avatar src={previewImg || avatar || defaultImg} />

          <input
            id="profileImg"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={imgRef}
            onChange={changeAvatar}
          />
          {isEdit ? (
            <>
              <StLabel htmlFor="profileImg">사진 선택하기</StLabel>
              <SaveImgBtn onClick={updataAvatar}>사진 저장</SaveImgBtn>
              <NicknameInput
                defaultValue={nickname}
                onChange={(e) => setNewNickname(e.target.value)}
              />
              <div>
                <CancelBtn onClick={() => setIsEdit(false)}>취소</CancelBtn>
                <CompleteBtn onClick={updateNickname}>수정완료</CompleteBtn>
              </div>
            </>
          ) : (
            <>
              <StSpan>{nickname}</StSpan>
              <div>
                <EditBtn onClick={() => setIsEdit(true)}>수정하기</EditBtn>
              </div>
            </>
          )}
        </StMain>
      </ProfileDiv>
    </>
  );
}

export default Profile;


import React from "react";
import { Link } from "react-router-dom";
import { FanLetterBox, FanLetterContext, FanLetterList, FanLetterUl, Img, ImgFigure, InfoSection, NameTimeDiv } from "style/componentsStyle/FanletterStyle";

function Fanletter({ fanletter }) {
  return (
    <FanLetterBox>
      <FanLetterUl>
        <Link to={`detail/${fanletter.id}`} style={{ textDecoration: "none" }}>
          <FanLetterList>
            <InfoSection>
              <ImgFigure>
                <Img src={fanletter.avatar}></Img>
              </ImgFigure>
              <NameTimeDiv>
                <span>{fanletter.nickname}</span>
                <time>{fanletter.createdAt}</time>
              </NameTimeDiv>
            </InfoSection>
            <FanLetterContext>{fanletter.content}</FanLetterContext>
          </FanLetterList>
        </Link>
      </FanLetterUl>
    </FanLetterBox>
  );
}

export default Fanletter;


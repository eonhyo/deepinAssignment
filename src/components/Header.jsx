import React from "react";
import { Name, NameBox, Title, TitleBox } from "style/componentsStyle/HeaderStyle";

function Header({ artist, setArtist }) {
  const selectArtist = (ArtistName) => {
    setArtist(ArtistName);
  };

  return (
    <div>
      <TitleBox>
        <Title>BLACKPINK FANLETTER COLLECTION</Title>
        <NameBox>
          <Name
            value="Jisoo"
            onClick={() => selectArtist("Jisoo")}
            clicked={String(artist === "Jisoo")}
          >
            Jisoo
          </Name>
          <Name
            value="Jennie"
            onClick={() => selectArtist("Jennie")}
            clicked={String(artist === "Jennie")}
          >
            Jennie
          </Name>
          <Name
            value="Rose"
            onClick={() => selectArtist("Rose")}
            clicked={String(artist === "Rose")}
          >
            Rose
          </Name>
          <Name
            value="Lisa"
            onClick={() => selectArtist("Lisa")}
            clicked={String(artist === "Lisa")}
          >
            Lisa
          </Name>
        </NameBox>
      </TitleBox>
    </div>
  );
}

export default Header;


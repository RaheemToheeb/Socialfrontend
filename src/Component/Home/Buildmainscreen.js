import React from "react";

const Buildmainscreen = () => {
  return (
    <Container>
      <TopBuild>
        <Hold>
          <Image />
          <Name></Name>
        </Hold>
      </TopBuild>
      <PostBuild>
        <Top>
          <Hold>
            <Imageprofile />
            <Profileholder>
              <ProfileName>name</ProfileName>
              <Profile>Original</Profile>
            </Profileholder>
          </Hold>
          <DotIcon />
        </Top>
        <PostImage src={pix} />
        <Icons>
          <Hold>
            <LoveIcon />
            <LoveIcon />
            <LoveIcon />
            <LoveIcon />
          </Hold>
        </Icons>
      </PostBuild>
    </Container>
  );
};

export default Buildmainscreen;

const Profilename = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const Top = styled.div``;

const Postbuild = styled.div``;

const Name = styled.div``;
const TopBuild = styled.div`
  padding: 20px 0;
  padding-left: 20px;
  background-color: white;
  border-radius: 7px;
  display: flex;
  align-items: center;
`;
const Image = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  outline: 4px solid purple;
  border: 4px solid transparent;
  background-clip: content-box;
`;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Imageprofile = styled.div`
  width: 50%;
  height: 50px;
  object-fit: cover;
  border-radius: 50px;
  outline: purple;
  border: 2px solid transparent;
  background-clip: content-box;
  margin-right: 15px;
`;

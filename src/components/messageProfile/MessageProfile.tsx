import styled from "styled-components";
import useChatRoom from "hooks/useChatRoom";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { chatRoomState } from "recoil/recoil";

const MessageProfile = () => {
  const { id } = useParams();
  const { toggleUser } = useChatRoom();
  const { currentUser } = useRecoilValue(chatRoomState);

  const _handleUser = (): void => {
    toggleUser(Number(id));
  };

  return (
    <Profile onClick={_handleUser}>
      <ProfileImg
        alt="profile"
        src={`/images/${currentUser.name}.jpg`}
        height={50}
      />
      <ProfileContent>
        <ProfileName>{currentUser.name}</ProfileName>
        <ProfileTyping>Typing...</ProfileTyping>
      </ProfileContent>
    </Profile>
  );
};

const Profile = styled.section`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ProfileImg = styled.img`
  border-radius: 70%;
`;
const ProfileContent = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
`;
const ProfileName = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;
const ProfileTyping = styled.p`
  font-size: 0.7rem;
  color: lightgrey;
  margin-top: 0.3rem;
`;

export default MessageProfile;

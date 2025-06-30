import styled from "styled-components";

import useUser from "../authentication/useUser";

const StyledUserAvatar = styled.div`
  width: max-content;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
  margin-left: 2rem;
  display: none;

  @media (width>=768px) {
    display: flex;
  }

  span {
    text-align: center;
    text-transform: capitalize;
  }
`;

const Avatar = styled.img`
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
  display: block;
`;

function UserAvatar() {
  const { userData: user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;

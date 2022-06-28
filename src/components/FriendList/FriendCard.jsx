import PropTypes from 'prop-types';
import { Status } from './FriendList.styled';

export function PaintingFriendCard({ status, avatar, name }) {
  return (
    <>
      <Status>{status ? 'online' : 'offline'}</Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
}

PaintingFriendCard.protoType = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import { PaintingFriendCard } from './FriendCard';
import { FrendList, FrendItem } from './FriendList.styled';

export function PaintingFriendsList({ friendsList }) {
  return (
    <FrendList>
      {friendsList.map(friend => (
        <FrendItem key={friend.id}>
          <PaintingFriendCard
            status={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </FrendItem>
      ))}
    </FrendList>
  );
}

PaintingFriendsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

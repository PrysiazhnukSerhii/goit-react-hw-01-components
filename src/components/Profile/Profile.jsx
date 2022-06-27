import PropTypes from 'prop-types';
import {Container, AvatarPicture,Stats,StatsItem} from './Profile.styled'

export function PaintingProfile  ({
  username,
  avatar="https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  tag,
  location,
  stats ,}) {

   let {followers,views,likes} = stats;
   
   
      return (<Container >
      <div className="description">
        < AvatarPicture
        src={avatar}
          alt="foto"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
    
      <Stats >
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </StatsItem>
      </Stats>
    </Container>)
  }

  PaintingProfile.propTypes = {
    username:PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,

    stats:PropTypes.shape({
      followers:PropTypes.number.isRequired,
    views:PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired
    }),
 
  }









  // export function Profile  ({proto}) {
//   console.log(proto)
//   console.log(proto.avatar)
//     return (<div className="profile">
//     <div className="description">
//       <img
//       src={proto.avatar}
//         // src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//         alt="User avatar"
//         className="avatar"
//       />
//       <p className="name">{proto.username}</p>
//       <p className="tag">@{proto.tag}</p>
//       <p className="location">{proto.location}</p>
//     </div>
  
//     <ul className="stats">
//       <li>
//         <span className="label">Followers</span>
//         <span className="quantity">{proto.followers}</span>
//       </li>
//       <li>
//         <span className="label">Views</span>
//         <span className="quantity">{proto.views}</span>
//       </li>
//       <li>
//         <span className="label">Likes</span>
//         <span className="quantity">{proto.likes}</span>
//       </li>
//     </ul>
//   </div>)
// }
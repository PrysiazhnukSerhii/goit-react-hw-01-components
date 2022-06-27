import { PaintingProfile } from "./Profile/Profile";
import { PaintingStatisticsList } from "./Statistics/ListStatistics";
import {PaintingFriendsList} from './FriendList/FriendList';
import {PaintingTransactionsList} from './TransactionHistory/TransactionsList';
import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";


export const App = () => {
 

  return (
    <div>
      <PaintingProfile 
      username={user.username}
      avatar={user.avatar}
      tag={user.tag}
      location={user.location}
      stats={user.stats}/>

      <PaintingStatisticsList stats={data}/>

      <PaintingFriendsList friendsList={friends}/>

      <PaintingTransactionsList items={transactions}/>

    </div>
  );
};
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Profile from "./components/Profile/Profile"
import userData from "./components/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./components/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import items from "./components/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </>
  );
};

export default App;

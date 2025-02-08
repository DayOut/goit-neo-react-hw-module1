import "./App.css";
import userData from "./data/userData.json";
import friendListData from "./data/friendListData.json";
import transactionHistoryData from "./data/transactionHistoryData.json";
import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";

function App() {
  return (
    <div className="App">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendListData} />
      <TransactionHistory items={transactionHistoryData} />
    </div>
  );
}

export default App;

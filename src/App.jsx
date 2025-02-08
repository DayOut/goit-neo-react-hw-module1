import './App.css'
import userData from "./data/userData.json";
import friendListData from "./data/friendListData.json";
import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";

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
      </div>
  );
}

export default App

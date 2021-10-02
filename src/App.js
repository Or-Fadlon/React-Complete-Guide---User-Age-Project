import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser.js";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([{ id: 0, userName: "Fadlon", age: 25 }]);
  const addUserHandler = (userName, age) => {
    setUsersList((prev) => {
      return [...prev, { id: prev.length, userName: userName, age: age }];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

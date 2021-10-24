import { useState } from "react";
import "./App.css";
import ErrorModal from "./components/UI/ErrorModal";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [error, setError] = useState();
  const [usersList, setUsersList] = useState([
    { id: 0, userName: "Fadlon", age: 25 },
  ]);

  const showErrorHandler = (title, message) => {
    setError({ title: title, message: message });
  };

  const closeErrorHandler = (event) => {
    setError(null);
  };

  const addUserHandler = (userName, age) => {
    setUsersList((prev) => {
      return [...prev, { id: prev.length, userName: userName, age: age }];
    });
  };

  return (
    <div className="App">
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={closeErrorHandler}
        />
      )}
      <AddUser onAddUser={addUserHandler} onError={showErrorHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

function AddUser() {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const changeUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    console.log(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">UserName</label>
        <input
          type="text"
          id="userName"
          value={enteredUserName}
          onChange={changeUserNameHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          min="1"
          step="1"
          value={enteredAge}
          onChange={changeAgeHandler}
        />
        <Button type="submit" value="Add User" />
      </form>
    </Card>
  );
}

export default AddUser;

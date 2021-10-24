import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useRef, useState } from "react";

function AddUser(props) {
  const nameInputRef = useRef("");
  const ageInputRef = useRef("");

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUserName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUserName.trim().length === 0) {
      props.onError(
        "Invalid Input",
        "Please enter a valid name (non-empty values)."
      );
      return;
    }
    if (+enteredAge < 1) {
      props.onError("Invalid Input", "Please enter a age (> 0).");
      return;
    }
    props.onAddUser(enteredUserName, +enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">UserName</label>
        <input
          type="text"
          id="userName"
          ref={nameInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          min="1"
          step="1"
          ref={ageInputRef}
        />
        <Button type="submit" value="Add User" />
      </form>
    </Card>
  );
}

export default AddUser;

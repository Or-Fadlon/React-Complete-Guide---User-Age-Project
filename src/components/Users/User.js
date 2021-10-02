import classes from "./User.module.css";

function User(props) {
  return (
    <li key={props.userData.id}>
      {props.userData.userName} ({props.userData.age} years old)
    </li>
  );
}

export default User;

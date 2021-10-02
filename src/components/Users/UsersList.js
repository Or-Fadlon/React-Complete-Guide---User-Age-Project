import classes from "./UsersList.module.css";
import User from "./User.js";
import Card from "../UI/Card.js";

function UsersList(props) {
  const list = props.users.map((item) => {
    return <User userData={item} />;
  });

  return (
    <Card className={classes.users}>
      <ul>{list}</ul>
    </Card>
  );
}

export default UsersList;

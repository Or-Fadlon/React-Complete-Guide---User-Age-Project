import "./AddUser.css";
const addUserHandler = (event) => {
  event.preventDefault();
};

function AddUser() {
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="userName">UserName</label>
      <input type="text" id="userName" />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" id="age" min="1" step="1" />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;

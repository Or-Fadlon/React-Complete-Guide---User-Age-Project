import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      type={props.type ?? "button"}
      className={classes.button}
      onClick={
        props.onClick ??
        (() => {
          return;
        })
      }
    >
      {props.value}
    </button>
  );
}

export default Button;

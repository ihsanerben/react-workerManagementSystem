import "./Button.css";

const Button = (props) => {
  return <button type={props.type || "button"}>{props.children} </button>;
};

export default Button;

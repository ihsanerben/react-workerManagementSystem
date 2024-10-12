import Card from "./Card.jsx";
import "./ErrorModal.css";

const ErrorModal = ({ setDurum, title, message }) => {
  const OKbuttonHandler = () => {
    setDurum(false);
  };

  return (
    <div className="errorModalWrapper">
      <Card>
        <header>{title}</header>
        <section>{message} </section>
        <footer>
          <button onClick={OKbuttonHandler}>OK</button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

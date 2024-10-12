import React, { useState } from "react";
import "./AddWorker.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = ({ workers, setWorkers }) => {
  const [workerName, setWorkerName] = useState("");
  const [workerWage, setWorkerWage] = useState("");

  const minWage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault();

    if (workerName.trim().length === 0 || workerWage.trim().length === 0) {
      if (workerName.trim().length === 0) {
        setTitle("Name filed is required!");
        setMessage("Please enter a name..");
      } else if (workerWage.trim().length === 0) {
        setTitle("Wage filed is required!");
        setMessage("Please enter a wage..");
      }
      setDurum(true);
    } else if (workerWage < minWage) {
      setTitle("Wage can't be less than $5000!");
      setMessage("Please enter a valid wage..");
      setDurum(true);
    } else {
      setWorkers((prevState) => [
        ...prevState,
        {
          id: workers.length + 1,
          name: workerName,
          wage: workerWage,
        },
      ]);
      setWorkerName("");
      setWorkerWage("");
    }
  };

  const [durum, setDurum] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="Caca">
      <Card>
        <form onSubmit={addWorkerHandler}>
          <label>
            Worker Name
            <input
              type="text"
              placeholder="name"
              onChange={(e) => {
                setWorkerName(e.target.value);
              }}
              value={workerName}
            />
          </label>
          <label>
            Worker Salary
            <input
              type="number"
              placeholder="salary"
              onChange={(e) => {
                setWorkerWage(e.target.value);
              }}
              value={workerWage}
            />
          </label>
          <Button type="submit">Add</Button>
        </form>
      </Card>
      {durum ? (
        <ErrorModal setDurum={setDurum} title={title} message={message} />
      ) : (
        ""
      )}
    </div>
  );
};

export default AddWorker;

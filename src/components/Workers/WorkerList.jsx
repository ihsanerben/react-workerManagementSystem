import React from "react";
import Card from "../UI/Card";
import "./WorkerList.css";

const WorkerList = ({ setWorkers, workers }) => {
  const deleteWorkerHandler = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };

  if (workers.length < 1) {
    return;
  }

  return (
    <div className="GeneralWrapper">
      <Card>
        <ul className="workerListWrapper">
          <li className="title">
            <span>Name</span>
            <span>Salary</span>
          </li>

          {workers.map((worker) => (
            <li onClick={() => deleteWorkerHandler(worker.id)} key={worker.id}>
              <span>{worker.name} </span>
              <span>{worker.wage} </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default WorkerList;

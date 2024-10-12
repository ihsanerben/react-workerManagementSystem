import { useState } from "react";
import "./App.css";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  const [workers, setWorkers] = useState([]);

  return (
    <div className="App">
      <AddWorker workers={workers} setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </div>
  );
}

export default App;

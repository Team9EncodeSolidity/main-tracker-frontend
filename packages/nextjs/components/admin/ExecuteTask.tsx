import { useState } from "react";

export function ExecuteTask(params: any) {
  const [selectedTask, setSelectedTask] = useState(0);

  const handleTaskChange = (event: { target: { value: string } }) => {
    setSelectedTask(parseInt(event.target.value, 10));
  };

  const handleCompleteTask = () => {
    //some code here
  };

  return (
    <>
      <div className="d-none">{params.address}</div>
      <div className="row">
        <h5 className="h5">
          <div className="titleTask borderTop mt-4">Execute and sign task ( by the repairman)</div>
        </h5>
      </div>
      <div className="row">
        <div className="p-2">
          <label htmlFor="taskDropdown">
            <strong>Select Task:</strong>
          </label>
        </div>
        <select id="taskDropdown" className="form-control m-2" value={selectedTask} onChange={handleTaskChange}>
          {Array.from({ length: 11 }, (_, index) => (
            <option key={index} value={index}>
              Task {index}
            </option>
          ))}
        </select>
      </div>

      <button className="btn btn-primary mt-2" onClick={handleCompleteTask}>
        Execute Task
      </button>
    </>
  );
}

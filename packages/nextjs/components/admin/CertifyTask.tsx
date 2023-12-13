import { useState } from "react";

export function CertifyTask(params: any) {
  const [selectedTask, setSelectedTask] = useState(0);

  const handleTaskChange = (event: { target: { value: string } }) => {
    setSelectedTask(parseInt(event.target.value, 10));
  };

  const handleCertifyTask = () => {
    // some code here for certifying the task
  };

  return (
    <>
      <div className="d-none">{params.address}</div>
      <div className="row">
        <h5 className="h5">
          <div className="titleTask borderTop mt-4">Certify Task ( by the quality inspector)</div>
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

      <button className="btn btn-primary mt-2" onClick={handleCertifyTask}>
        Certify Task
      </button>
    </>
  );
}

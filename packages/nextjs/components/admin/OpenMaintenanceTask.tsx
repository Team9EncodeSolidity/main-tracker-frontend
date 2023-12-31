import { useState } from "react";

export function OpenMaintenanceTask() {
  const [clientName, setClientName] = useState("");
  const [systemName, setSystemName] = useState("");
  const [systemCycles, setSystemCycles] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [startingTime, setStartingTime] = useState("");
  const [cost, setCost] = useState("");
  const [repairman, setRepairman] = useState("");
  const [qualityInspector, setQualityInspector] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Handle form submission logic here
    // You can access the form data using the state variables (clientName, systemName, etc.)
  };
  return (
    <>
      <div className="row">
        <h5 className="h5">
          <div className="titleTask borderTop">Open a new maintenance task</div>
        </h5>
        <div className="col-md-10">
          <form onSubmit={handleSubmit}>
            <ul className="p-2 tasklist">
              <li>
                <strong>Client Name:</strong>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter client name..."
                  aria-label="Search"
                  value={clientName}
                  onChange={e => setClientName(e.target.value)}
                />
              </li>
              <li>
                <strong>System Name:</strong>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter System name..."
                  aria-label="Search"
                  value={systemName}
                  onChange={e => setSystemName(e.target.value)}
                />
              </li>
              <li>
                <strong>System Cycles:</strong>
                <input
                  type="text"
                  className="form-control"
                  placeholder="System cycles..."
                  aria-label="Search"
                  value={systemCycles}
                  onChange={e => setSystemCycles(e.target.value)}
                />
              </li>
              <li>
                <strong>Estimated Time:</strong>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter estimated time..."
                  aria-label="Search"
                  value={estimatedTime}
                  onChange={e => setEstimatedTime(e.target.value)}
                />
              </li>
              <li>
                <strong>Starting Time:</strong>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter starting time..."
                  aria-label="Search"
                  value={startingTime}
                  onChange={e => setStartingTime(e.target.value)}
                />
              </li>
              <li>
                <strong>Cost (tokens):</strong>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter cost..."
                  aria-label="Search"
                  value={cost}
                  onChange={e => setCost(e.target.value)}
                />
              </li>
              <li>
                <strong>Repairman (engineer):</strong>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter repairman's address..."
                  aria-label="Search"
                  value={repairman}
                  onChange={e => setRepairman(e.target.value)}
                />
              </li>
              <li>
                <strong>Quality Inspector (engineer):</strong>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter quality inspector's address..."
                  aria-label="Search"
                  value={qualityInspector}
                  onChange={e => setQualityInspector(e.target.value)}
                />
              </li>
            </ul>

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

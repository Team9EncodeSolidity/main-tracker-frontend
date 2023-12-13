import { MaintenanceTask } from "./MaintenanceTask";

export function MaintenanceExplorer() {
  return (
    <>
      <div className="wrapper">
        <h4 className="h4 subtitle">Maintenance Task Explorer</h4>
        <h5 className="h6 subtitle">There are currently N task(s)</h5>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter client name..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
        <MaintenanceTask></MaintenanceTask>
        {/* <MaintenanceTask></MaintenanceTask> */}
      </div>
    </>
  );
}

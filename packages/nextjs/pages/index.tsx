import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <OverviewSection></OverviewSection>
      <MaintenanceExplorer></MaintenanceExplorer>
      <AdminPanel></AdminPanel>
      <BuyTokens></BuyTokens>
    </>
  );
};

function OverviewSection() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="img-logo">
              <img src="https://ipfs.io/ipfs/bafybeifj3wz462zils26mztyepwfzhxlxe557k3sptm3yfcplorw7xlpoi"></img>
            </div>
          </div>
          <div className="col-md-8">
            <h1 className="h3 main-title">Mainteanance Tracker Platform</h1>
            <h3 className="h5 subtitle">Revolutionizing Maintenance Operations on the Blockchain</h3>
            <p className="p-3">
              Welcome to MaintenanceTracker, your gateway to a cutting-edge decentralized solution for managing and
              certifying maintenance tasks. Leveraging blockchain technology, MaintenanceTracker ensures transparency,
              security, and efficiency throughout the entire maintenance lifecycle.
            </p>
            <h5 className="h5">Key features</h5>
            <ul className="p-2">
              <li>
                <strong>Intelligent Task Management:</strong>
                <ul>
                  <li>Effortlessly initiate, monitor, and manage maintenance tasks in real-time.</li>
                </ul>
              </li>
              <li>
                <strong>Certification Beyond Doubt:</strong>
                <ul>
                  <li>Certify completed tasks with absolute certainty using blockchain technology.</li>
                </ul>
              </li>
              <li>
                <strong>Tokenized Efficiency:</strong>
                <ul>
                  <li>Experience the efficiency of tokenized transactions with MaintenanceToken (MT).</li>
                </ul>
              </li>
              <li>
                <strong>Exclusive NFT Certificates:</strong>
                <ul>
                  <li>Receive exclusive NFT certificates for each completed task.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 text-center">Deployed Contracts info</div>
          <div className="col-md-8">
            <div>
              <strong>Maintenance Factory CT address:</strong> 0X123...7A6
            </div>
            <div>
              <strong>Token CT address:</strong> 0X123...7A6
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MaintenanceExplorer() {
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
        <MaintenanceTask></MaintenanceTask>
      </div>
    </>
  );
}

function AdminPanel() {
  return (
    <>
      <div className="wrapper">
        <h4 className="h4 subtitle">Admin panel</h4>
        <OpenMaintenanceTask></OpenMaintenanceTask>
        <ExecuteTask></ExecuteTask>
        <CertifyTask></CertifyTask>
        <PayTask></PayTask>
      </div>
    </>
  );
}

function MaintenanceTask() {
  return (
    <div className="row mt-3">
      <h5 className="h5 borderTop">
        <div className="titleTask">Task Id #0 | Status</div>
      </h5>
      <div className="col-md-2">
        <div className="img-nft">
          <img src="https://ipfs.io/ipfs/bafybeifj3wz462zils26mztyepwfzhxlxe557k3sptm3yfcplorw7xlpoi"></img>
        </div>
      </div>
      <div className="col-md-10">
        <ul className="p-2 tasklist">
          <li>
            <strong>Client Name:</strong> John
          </li>
          <li>
            <strong>System Name:</strong> Airplane
          </li>
          <li>
            <strong>System Cycles:</strong> 1000
          </li>
          <li>
            <strong>Estimated Time:</strong> 3 days
          </li>
          <li>
            <strong>Starting Time:</strong> 1 day
          </li>
          <li>
            <strong>Cost (tokens):</strong> 1
          </li>
          <li>
            <strong>Repairman (engineer):</strong> 0xa...
          </li>
          <li>
            <strong>Quality Inspector (engineer):</strong> 0xa...
          </li>
        </ul>
      </div>
    </div>
  );
}
function OpenMaintenanceTask() {
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
function ExecuteTask() {
  const [selectedTask, setSelectedTask] = useState(0);

  const handleTaskChange = (event: { target: { value: string } }) => {
    setSelectedTask(parseInt(event.target.value, 10));
  };

  const handleCompleteTask = () => {
    //some code here
  };

  return (
    <>
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
function CertifyTask() {
  const [selectedTask, setSelectedTask] = useState(0);

  const handleTaskChange = (event: { target: { value: string } }) => {
    setSelectedTask(parseInt(event.target.value, 10));
  };

  const handleCertifyTask = () => {
    // some code here for certifying the task
  };

  return (
    <>
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

function PayTask() {
  const [selectedTask, setSelectedTask] = useState(0);

  const handleTaskChange = (event: { target: { value: string } }) => {
    setSelectedTask(parseInt(event.target.value, 10));
  };

  const handlePayTask = () => {
    // some code here for paying the task
  };

  return (
    <>
      <div className="row">
        <h5 className="h5">
          <div className="titleTask borderTop mt-4">Pay Task (by the client)</div>
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

      <button className="btn btn-primary mt-2" onClick={handlePayTask}>
        Pay Task
      </button>
    </>
  );
}
function BuyTokens() {
  const handleButtonClick = () => {
    // Handle button click logic here
  };

  return (
    <div style={{ position: "fixed", bottom: 60, right: 100, zIndex: 1000 }}>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Buy Tokens
      </button>
    </div>
  );
}

export default Home;

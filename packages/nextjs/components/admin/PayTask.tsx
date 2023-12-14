import { useState } from "react";

export function PayTask(params: any) {
  const [selectedTask, setSelectedTask] = useState(0);
  const [data, setData] = useState<{ result: object }>();
  const [isLoading, setLoading] = useState(false);

  const handleTaskChange = (event: { target: { value: string } }) => {
    setSelectedTask(parseInt(event.target.value, 10));
  };

  const handlePayTask = () => {
    const body = {
      tokenId: selectedTask.toString(),
      url: "ipfs://QmdtibqnMFai8CwQ6qUUUkxhs4MAZNPnrx9h4Ncn5PyQpn",
    };

    setLoading(true);

    fetch(`${params.url}/pay-for-task`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(() => {
        setData(data);
        setLoading(false);
      });
  };

  if (isLoading) return <p>Minting NFT...</p>;
  if (!data) {
    // const result = data.result;

    if (typeof data != "undefined") {
      console.log(JSON.stringify(data));
      alert(`${JSON.stringify(data)}`);

      setTimeout(() => {
        window.parent.location = window.parent.location.href;
      }, 2000);
    }
  }

  return (
    <>
      <div className="d-none">{params.address}</div>
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

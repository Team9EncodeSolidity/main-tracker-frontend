import { useState } from "react";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";

export function ExecuteTask(params: any) {
  const [selectedTask, setSelectedTask] = useState(0);

  const {
    config: config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: `${params.trackerContractAddress}`,
    abi: params.trackerContractAbi,
    functionName: "completeTask",
    args: [selectedTask.toString()],
    enabled: true,
  });

  const { data: data, error: error, isError: isError, write: write } = useContractWrite(config);
  const { isLoading: isLoading, isSuccess: isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  if (isPrepareError) {
    console.log(`PrepareError: ${prepareError?.message}`);
  }
  if (isError) {
    console.log(`Error: ${error?.message}`);
  }
  if (isLoading) console.log("Executing maintenance task");
  if (isSuccess) {
    console.log("Execute task successful");
    setTimeout(() => {
      window.parent.location = window.parent.location.href;
    }, 2000);
  }

  const handleTaskChange = (event: { target: { value: string } }) => {
    setSelectedTask(parseInt(event.target.value, 10));
    console.log(`Task ${selectedTask} selected.`);
  };

  const handleCompleteTask = (e: any) => {
    e.preventDefault();
    console.log(`Selected task: ${selectedTask.toString()}`);
    write?.();
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

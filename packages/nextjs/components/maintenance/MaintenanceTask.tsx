import { useEffect, useState } from "react";
import Image from "next/image";

const URL = "http://localhost:8080";
const PATH = "/tasks-list";

export function MaintenanceTask() {
  const [data, setData] = useState<{ result: object[] }>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL + PATH)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading Task List...</p>;
  if (!data) return <p>No tasks yet</p>;

  const taskList = data.result;

  if (typeof taskList != "undefined" && taskList?.length < 1) return <p>No tasks yet</p>;

  return (
    <div className="row mt-3">
      <h5 className="h5 borderTop">
        <div className="titleTask">Task Id #0 | Status</div>
      </h5>
      {taskList?.map((task: any) => {
        return (
          <div key={Math.random()}>
            <small>
              <div style={{ width: "300px" }}>
                <code>{JSON.stringify(task).split(",").join("\n")}</code>
              </div>
            </small>
            <b>ID: {task.tokenId}</b>
            <div className="col-md-2">
              <div className="img-nft">
                <Image
                  alt="img2"
                  style={{ width: "100%" }}
                  width={0}
                  height={0}
                  src="https://ipfs.io/ipfs/bafybeifj3wz462zils26mztyepwfzhxlxe557k3sptm3yfcplorw7xlpoi"
                />
              </div>
            </div>
            <div className="col-md-10">
              <ul className="p-2 tasklist">
                <li>
                  <strong>Task Id:</strong> 0
                </li>
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
      })}
    </div>
  );
}

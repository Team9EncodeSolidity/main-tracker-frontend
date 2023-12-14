import { CertifyTask } from "./CertifyTask";
import { ExecuteTask } from "./ExecuteTask";
import { OpenMaintenanceTask } from "./OpenMaintenanceTask";
import { PayTask } from "./PayTask";

export function AdminPanel(params: any) {
  console.log(JSON.stringify(params));
  return (
    <>
      <div className="wrapper">
        <div className="d-none">{params.address}</div>
        <h4 className="h4 subtitle">Admin panel</h4>
        <OpenMaintenanceTask
          address={params.address}
          url={params.url}
          trackerContractAddress={params.trackerContractAddress}
          trackerContractAbi={params.trackerContractAbi}
        />
        <ExecuteTask
          address={params.address}
          trackerContractAddress={params.trackerContractAddress}
          trackerContractAbi={params.trackerContractAbi}
        />
        <CertifyTask
          address={params.address}
          trackerContractAddress={params.trackerContractAddress}
          trackerContractAbi={params.trackerContractAbi}
        />
        <PayTask
          address={params.address}
          url={params.url}
          trackerContractAddress={params.trackerContractAddress}
          trackerContractAbi={params.trackerContractAbi}
        />
      </div>
    </>
  );
}

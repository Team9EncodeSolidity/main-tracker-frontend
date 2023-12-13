import { CertifyTask } from "./CertifyTask";
import { ExecuteTask } from "./ExecuteTask";
import { OpenMaintenanceTask } from "./OpenMaintenanceTask";
import { PayTask } from "./PayTask";

export function AdminPanel() {
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

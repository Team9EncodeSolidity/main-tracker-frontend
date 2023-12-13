import Image from "next/image";

export function OverviewSection() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="img-logo">
              <Image
                alt="img"
                style={{ width: "100%" }}
                width={0}
                height={0}
                src="https://ipfs.io/ipfs/bafybeifj3wz462zils26mztyepwfzhxlxe557k3sptm3yfcplorw7xlpoi"
              />
            </div>
          </div>
          <div className="col-md-8">
            <h1 className="h3 main-title">Maintenance Tracker Platform</h1>
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

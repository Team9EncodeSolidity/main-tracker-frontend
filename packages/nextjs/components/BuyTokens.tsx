import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";

export function BuyTokens(params: any) {
  const amount = "1000000000000000000";

  const {
    config: config_Buy,
    error: prepareError_Buy,
    isError: isPrepareError_Buy,
  } = usePrepareContractWrite({
    address: `${params.trackerContractAddress}`,
    abi: params.trackerContractAbi,
    functionName: "buyTokens",
    args: [],
    enabled: false,
    value: 1n,
  });

  const {
    config: config_Apr,
    error: prepareError_Apr,
    isError: isPrepareError_Apr,
  } = usePrepareContractWrite({
    address: `${params.tokenContractAddress}`,
    abi: params.tokenContractAbi,
    functionName: "approve",
    args: [params.trackerContractAddress, amount],
    enabled: false,
  });

  const {
    data: data_Buy,
    error: error_Buy,
    isError: isError_Buy,
    write: write_Buy,
    reset: reset_Buy,
  } = useContractWrite(config_Buy);
  const { isLoading: isLoading_Buy, isSuccess: isSuccess_Buy } = useWaitForTransaction({
    hash: data_Buy?.hash,
  });

  const {
    data: data_Apr,
    error: error_Apr,
    isError: isError_Apr,
    write: write_Apr,
    reset: reset_Apr,
  } = useContractWrite(config_Apr);
  const { isLoading: isLoading_Apr, isSuccess: isSuccess_Apr } = useWaitForTransaction({
    hash: data_Apr?.hash,
  });

  const approveSpend = async () => {
    console.log("Approving");
    write_Apr?.();
  };

  if (isPrepareError_Buy) {
    console.log(`PrepareError: ${prepareError_Buy?.message}`);
  }
  if (isError_Buy) {
    console.log(`Error: ${error_Buy?.message}`);
  }
  if (isLoading_Buy) console.log("Buying token");
  if (isSuccess_Buy) {
    reset_Buy();
    approveSpend();
  }

  if (isPrepareError_Apr) {
    console.log(`PrepareError: ${prepareError_Apr?.message}`);
  }
  if (isError_Apr) {
    console.log(`Error: ${error_Apr?.message}`);
  }
  if (isLoading_Apr) console.log("Approving token");
  if (isSuccess_Apr) {
    reset_Apr();
    alert("Token successfully bought and approved!");
  }

  const handlePayTask = (e: any) => {
    e.preventDefault();
    console.log("Entro");
    write_Buy?.();
  };

  return (
    <div style={{ position: "fixed", bottom: 60, right: 100, zIndex: 1000 }}>
      {/* <div className="d-none">{params.trackerContractAddress}</div> */}
      <button className="btn btn-primary" onClick={handlePayTask}>
        {isLoading_Buy || isLoading_Apr ? "Buying..." : "Buy+Approve Tokens"}
        {/* {isLoading ? "Buying..." : "Buy+Approve use of Tokens"} */}
      </button>
    </div>
  );
}

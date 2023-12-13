// import { useContractWrite, usePrepareContractWrite } from "wagmi";
// import { parseEther } from 'viem';

// const AMOUNT = 1n;
// const RATIO = 1000000000000000000n;

export function BuyTokensAndApprove({
  trackerContractAddress,
  trackerContractAbi,
  tokenContractAddress,
  tokenContractAbi,
}: any) {
  console.log(trackerContractAddress, trackerContractAbi, tokenContractAddress, tokenContractAbi);
  // const { config } = usePrepareContractWrite({
  //   address: trackerContractAddress,
  //   abi: trackerContractAbi,
  //   functionName: "buyTokens",
  //   args: [],
  //   value: parseEther(AMOUNT.toString()) / RATIO,
  // });
  // const { data, isLoading, isSuccess, write } = useContractWrite(config);

  // console.log(JSON.stringify(trackerContractAddress));
  // console.log(JSON.stringify(trackerContractAbi));
  // const handleButtonClickBuy = () => {
  // Handle button click logic here
  // };
  const handleButtonClickApprove = () => {
    // Handle button click logic here
  };

  return (
    <div style={{ position: "fixed", width: "320px", bottom: 60, right: 50, zIndex: 1000 }}>
      <div className="container">
        <div className="row text-sm">
          <div className="col-md-6">
            <button className="btn btn-primary">Buy 1 Token</button>
            {/* <button className="btn btn-primary" disabled={!write} onClick={() => write?.()}>
              Buy 1 Token
            </button> */}
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary" onClick={handleButtonClickApprove}>
              Approve Max Tokens
            </button>
          </div>
        </div>
        <div className="row text-sm">
          {/* {isLoading && <>Loading..</>} */}
          {/* {isSuccess && <>Transaction: {JSON.stringify(data)}</>}{" "} */}
        </div>
      </div>
    </div>
  );
}

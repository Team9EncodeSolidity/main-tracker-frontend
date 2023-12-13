export function BuyTokens(params: any) {
  console.log(JSON.stringify(params));
  const handleButtonClick = () => {
    // Handle button click logic here
  };

  return (
    <div style={{ position: "fixed", bottom: 60, right: 100, zIndex: 1000 }}>
      {/* <div className="d-none">{params.trackerContractAddress}</div> */}
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Buy Tokens
      </button>
    </div>
  );
}

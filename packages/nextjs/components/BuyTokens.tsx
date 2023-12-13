export function BuyTokens() {
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

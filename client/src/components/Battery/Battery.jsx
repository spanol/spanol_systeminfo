const Battery = ({ data }) => {
  const { hasBattery, currentCapacity, percent, isCharging, model } = data;
  return (
    <div className="battery">
      <h1>Cpu info:</h1>
      <p>{hasBattery ? "true" : "false"}</p>
      <p>{currentCapacity}</p>
      <p>{percent}%</p>
      <p>{isCharging}</p>
      <p>{model}</p>
    </div>
  );
};

export default Battery;

const Battery = ({ data }) => {
  const { hasBattery, currentCapacity, percent, isCharging, model } = data;
  return (
    <div className="battery">
      <h1>Cpu info:</h1>
      <p>Has battery: {hasBattery ? "true" : "false"}</p>
      <p>Battery capacity: {currentCapacity}</p>
      <p>Battery percent: {percent}%</p>
      <p>Is charging: {isCharging ? "true" : "false"}</p>
      <p>Battery model: {model}</p>
    </div>
  );
};

export default Battery;

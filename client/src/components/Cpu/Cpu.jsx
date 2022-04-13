const Cpu = ({ data }) => {
  const {
    brand,
    cores,
    family,
    manufacturer,
    speed,
    speedMax,
    speedMin,
    voltage,
    socket,
  } = data;
  return (
    <div className="cpu">
      <h1>Cpu info:</h1>
      <p>Brande: {brand}</p>
      <p>Cores: {cores}</p>
      <p>Family: {family}</p>
      <p>Socket: {socket}</p>
      <p>Manufacturer: {manufacturer}</p>
      <p>Speed: {speed}Ghz</p>
      <p>Max speed: {speedMax}Ghz</p>
      <p>Min speed: {speedMin}Ghz</p>
      <p>Voltage: {voltage === "" ? "Couldn't get" : voltage + "V"}</p>
    </div>
  );
};

export default Cpu;

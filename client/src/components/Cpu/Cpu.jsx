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
  } = data;
  return (
    <div className="cpu">
      <h1>Cpu info:</h1>
      <p>{brand}</p>
      <p>{cores}</p>
      <p>{family}</p>
      <p>{manufacturer}</p>
      <p>{speed}</p>
      <p>{speedMax}</p>
      <p>{speedMin}</p>
      <p>{voltage}</p>
      <h1>cpu</h1>
    </div>
  );
};

export default Cpu;

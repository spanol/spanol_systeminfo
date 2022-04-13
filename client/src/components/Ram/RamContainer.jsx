import { useEffect, useState } from "react";
// import { Api } from "../../Api/Api";
import Ram from "./Ram";
// adicionar opção de tempo real
const RamContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("http://localhost:3001/ram");
      const results = await response.json();
      console.log(results);
      setData(results);
    };
    loadData();
  }, []);

  return (
    <section className="section">
      {data === null ? (
        <div>loading...</div>
      ) : (
        <>
          <Ram data={data} />
        </>
      )}
    </section>
  );
};

export default RamContainer;

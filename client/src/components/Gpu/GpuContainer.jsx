import { useEffect, useState } from "react";
// import { Api } from "../../Api/Api";
import Gpu from "./Gpu";

const GpuContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("http://localhost:3001/gpu");
      const results = await response.json();
      console.log(results);
      setData(results);
    };
    loadData();
  }, []);

  return (
    <section className="section">
      <div className="container">
      {data === null ? (
        <div>loading...</div>
      ) : (
        <>
          <Gpu data={data} />
        </>
      )}
      </div>
    </section>
  );
};

export default GpuContainer;

import { useEffect, useState } from "react";
// import { Api } from "../../Api/Api";
import Gpu from "./Gpu";

const OsContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("http://localhost:3001/os");
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
          <Gpu data={data} />
        </>
      )}
    </section>
  );
};

export default OsContainer;

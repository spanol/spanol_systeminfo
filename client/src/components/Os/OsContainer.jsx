import { useEffect, useState } from "react";
// import { Api } from "../../Api/Api";
import Os from "./Os";

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
      <div className="container">
      {data === null ? (
        <div>loading...</div>
      ) : (
        <>
          <Os data={data} />
        </>
      )}
      </div>
    </section>
  );
};

export default OsContainer;

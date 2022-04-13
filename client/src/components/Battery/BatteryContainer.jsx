import { useEffect, useState } from "react";
import { useTheme } from "../../context/Context";
// import { Api } from "../../Api/Api";
import Battery from "./Battery";

const BatteryContainer = () => {
  const { theme, setTheme} = useTheme()
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("http://localhost:3001/battery");
      const results = await response.json();
      console.log(results);
      setData(results);
    };
    loadData();
  }, []);

  
  //   if(data === null) return <div>loading....</div>

  return (
    <section  className="section">
      {data === null ? (
        <div>loading...</div>
      ) : (
        <>
          <Battery data={data} />
        </>
      )}
    </section>
  );
};

export default BatteryContainer;

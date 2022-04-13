// import BatteryContainer from "../components/battery/BatteryContainer";
// import CpuContainer from "../components/cpu/CpuContainer";
// import GpuContainer from "../components/gpu/GpuContainer";
// import RamContainer from "../components/ram/RamContainer";

import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="container">
      {/* <div className="hub"> */}
        <Link to="/battery">Battery</Link>
        <Link to="/cpu">Cpu</Link>
        <Link to="/gpu">Gpu</Link>
        <Link to="/ram">Ram</Link>
        <Link to="/os">Os</Link>
      {/* </div> */}
    </div>
  );
};

export default Home;

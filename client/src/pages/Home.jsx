// import BatteryContainer from "../components/battery/BatteryContainer";
// import CpuContainer from "../components/cpu/CpuContainer";
// import GpuContainer from "../components/gpu/GpuContainer";
// import RamContainer from "../components/ram/RamContainer";
import {TiBatteryCharge} from "react-icons/ti";
import { FaDesktop, FaMemory, FaWindows } from "react-icons/fa";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="container">
      <div className="hub">
        <Link to="/battery"><TiBatteryCharge className="logo"/></Link>
        <Link to="/cpu">Cpu</Link>
        <Link to="/gpu"><FaDesktop className="logo"/></Link>
        <Link to="/ram"><FaMemory className="logo"/></Link>
        <Link to="/os"><FaWindows className="logo"/></Link>
      </div>
    </div>
  );
};

export default Home;

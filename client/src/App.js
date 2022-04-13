import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home";
import BatteryContainer from "./components/Battery/BatteryContainer";
import CpuContainer from "./components/Cpu/CpuContainer";
import GpuContainer from "./components/Gpu/GpuContainer";
import RamContainer from "./components/Ram/RamContainer";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <div className="container">
      <BatteryContainer/>
      <CpuContainer/>
      <GpuContainer/>
      <RamContainer/>
      </div>
      <Footer />
    </>
  );
}

export default App;

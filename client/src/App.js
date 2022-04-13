import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import BatteryContainer from "./components/Battery/BatteryContainer";
import CpuContainer from "./components/Cpu/CpuContainer";
import GpuContainer from "./components/Gpu/GpuContainer";
import RamContainer from "./components/Ram/RamContainer";
import OsContainer from "./components/Os/OsContainer";
import "./App.css";
import ThemeProvider from "./context/Context";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <ThemeProvider >
      <Header />
      <Routes>
        <Route exct path="/" element={<Home/>} />
        <Route path="/battery" element={<BatteryContainer/>} />
        <Route path="/cpu" element={<CpuContainer/>} />
        <Route path="/gpu" element={<GpuContainer/>} />
        <Route path="/ram" element={<RamContainer/>} />
        <Route path="/os" element={<OsContainer/>} />
      </Routes  >
      <Footer />
    </ThemeProvider>
  );
}

export default App;

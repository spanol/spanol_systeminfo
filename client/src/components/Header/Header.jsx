import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex header pagecontainer">
      {/* <nav className="flex"> */}
      <Link to="/">Home</Link>
      <Link to="/battery">Battery</Link>
        <Link to="/cpu">Cpu</Link>
        <Link to="/gpu">Gpu</Link>
        <Link to="/ram">Ram</Link>
        <Link to="/os">Os</Link>
      {/* </nav> */}
    </header>
  );
};

export default Header;

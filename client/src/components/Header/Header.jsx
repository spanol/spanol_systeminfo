import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const HeaderHome = () => {
    return "you are at home";
  };

  const HeaderRest = () => {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/battery">Battery</Link>
        <Link to="/cpu">Cpu</Link>
        <Link to="/gpu">Gpu</Link>
        <Link to="/ram">Ram</Link>
        <Link to="/os">Os</Link>
      </>
    );
  };
  const Location = useLocation();

  return (
    <header className="flex header pagecontainer">
      {/* <nav className="flex"> */}
      { Location.pathname === "/" ? <HeaderHome /> : <HeaderRest /> }
      <button onClick={() => console.log(Location)}>teste</button>
      {/* </nav> */}
    </header>
  );
};

export default Header;

import './Header.css'
import { Outlet, Link } from "react-router-dom";
import Buttons from './Buttons';
const Header = () => {
  return (
    <>
    
      <nav className="header" style={{alignItems:'center'}}>
        <br/>
        <header>
          <br/><br/><br/>
        <ul>
          <li><h3><Buttons></Buttons></h3></li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        </header>
      </nav>
      <Outlet />
    </>
  )
};

export default Header;
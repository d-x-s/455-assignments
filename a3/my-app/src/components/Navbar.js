import logo from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
        <nav className="navbar">
            <div className="logo">
                <img src={logo} className="pepe-logo" alt="The logo!!!"/>
            </div>
            <div className="header-links">
                <Link to="/home">counter</Link>
                <Link to="/about">form</Link>
                <Link to="/contact">gallery</Link>
                <Link to="/server">server-form-gallery</Link>
                <Link to="/filter">server-filter</Link>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;

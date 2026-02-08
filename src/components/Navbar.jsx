import navLinks from "../utils/navLinksData.js";
import Dropdown from "./Dropdown.jsx";

const Navbar = () => {
  let depthLevel = 0;

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="container">
          <ul className="header__menu d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between">
            {navLinks.map((link, index) => (
              <Dropdown key={index} link={link} depthLevel={depthLevel} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

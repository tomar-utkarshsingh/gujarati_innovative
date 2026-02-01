// import DropdownMenu from "./DropdownMenu";
import "./styles/navbar.css";

const Navbar = () => {
  // const navLinks = [
  //   {
  //     label: "HOME",
  //     href: "/",
  //   },
  //   {
  //     label: "COURSES",
  //     href: "/",
  //   },
  //   {
  //     label: "ADMISSION",
  //     href: "/",
  //   },
  //   {
  //     label: "MORE",
  //     submenu: [
  //       {
  //         label: "ACTIVITIES",
  //         submenu: [
  //           {
  //             label: "NSS",
  //             href: "/",
  //           },
  //           {
  //             label: "NCC",
  //             href: "/",
  //           },
  //         ],
  //       },
  //       {
  //         label: "ADMISSION",
  //         submenu: [
  //           {
  //             label: "ADMISSION FORM",
  //             href: "/",
  //           },
  //           {
  //             label: "FEE STRUCTURE",
  //             href: "/",
  //           },
  //           {
  //             label: "ADMISSION PROCESS",
  //             href: "/",
  //           },
  //           {
  //             label: "ELIGIBILITY CRITERIA",
  //             href: "/",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  return (
    <nav className="nav">
      <div className="container">
        <ul className="d-flex align-items-center justify-content-between">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="dropdown__el">
            <a href="/">Dropdown</a>
            <ul className="dropdown__menu">
              <li>
                <a href="/">Dropdown menu Item 1</a>
              </li>
              <li className="dropdown__el">
                <a href="/">Dropdown menu Item 2</a>
                <ul className="dropdown__submenu">
                  <li>
                    <a href="/">Dropdown submenu item 1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">Dropdown menu item 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

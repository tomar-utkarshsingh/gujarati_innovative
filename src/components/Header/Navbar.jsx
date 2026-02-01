import Dropdown from "./Dropdown";
import "./styles/navbar.css";

const Navbar = () => {
  const navLinks = [
    {
      label: "HOME",
      href: "/",
    },
    {
      label: "COURSES",
      href: "/",
    },
    {
      label: "ADMISSION",
      href: "/",
    },
    {
      label: "MORE",
      child: [
        {
          label: "ACTIVITIES",
          child: [
            {
              label: "NSS",
              href: "/",
            },
            {
              label: "NCC",
              href: "/",
            },
          ],
        },
        {
          label: "ADMISSION",
          child: [
            {
              label: "ADMISSION FORM",
              href: "/",
            },
            {
              label: "FEE STRUCTURE",
              href: "/",
            },
            {
              label: "ADMISSION PROCESS",
              href: "/",
            },
            {
              label: "ELIGIBILITY CRITERIA",
              href: "/",
            },
          ],
        },
      ],
    },
  ];

  return (
    <nav className="nav">
      <div className="container">
        <ul className="d-flex align-items-center gap-4">
          {navLinks.map((link, index) => (
            <Dropdown key={index} link={link} depthLevel={0} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

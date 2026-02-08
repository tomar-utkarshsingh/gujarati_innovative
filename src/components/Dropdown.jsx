import { FaChevronDown, FaChevronLeft } from "react-icons/fa6";

const Dropdown = ({ link, depthLevel }) => {
  const dropdownClass = `dropdown__base-class ${depthLevel === 0 ? "dropdown__menu" : "dropdown__submenu"}`;
  return (
    <li className="nav__link">
      {link.child ? (
        <>
          <a className="link__label dropdown__label" href="#">
            {depthLevel > 0 && <FaChevronLeft />}
            {link.label} &nbsp;
            {depthLevel === 0 && <FaChevronDown />}
          </a>
          <ul className={dropdownClass}>
            {link.child.map((child, index) => (
              <Dropdown key={index} link={child} depthLevel={depthLevel + 1} />
            ))}
          </ul>
        </>
      ) : (
        <a className="link__label" href="#">
          {link.label}
        </a>
      )}
    </li>
  );
};

export default Dropdown;

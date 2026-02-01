import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const Dropdown = (props) => {
  const { link, depthLevel } = props;
  const hasChild = link.child && link.child.length > 0 ? true : false;

  return (
    <li className="nav__link">
      {hasChild ? (
        <>
          <a className="d-flex align-items-center gap-1">
            {link.label}
            {depthLevel === 0 ? <FiChevronDown /> : <FiChevronRight />}{" "}
          </a>
          <ul className={`${depthLevel > 0 ? "submenu" : "dropdown__menu"}`}>
            {link.child.map((child, index) => (
              <Dropdown key={index} link={child} depthLevel={depthLevel + 1} />
            ))}
          </ul>
        </>
      ) : (
        <a href={link.href}>{link.label}</a>
      )}
    </li>
  );
};

export default Dropdown;

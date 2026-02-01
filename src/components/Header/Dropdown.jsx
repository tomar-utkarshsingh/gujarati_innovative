const Dropdown = (props) => {
  const { link, depthLevel } = props;
  const hasChild = link.child && link.child.length > 0 ? true : false;

  return (
    <li className="nav__link">
      {hasChild ? (
        <>
          <a>{link.label}</a>
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

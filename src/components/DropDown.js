import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DropDown.css";

function DropDown({ data, closeMobileMenu }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropDown-menu clicked" : "dropDown-menu"}
      >
        {data.map((e, index) => {
          return (
            <li key={"nav-dropdown-" + index}>
              <Link
                className={"dropDown-link"}
                to={e.path}
                onClick={() => {
                  setClick(false);
                  closeMobileMenu();
                }}
              >
                {e.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropDown;

import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { FaLaptopCode } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GiTireIronCross } from "react-icons/gi";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "./../../Helpers/ThemeProvider.jsx";
import "./../../css/Header/Header.css";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [light, setLight] = useState(false);
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!open);
  }

  function toggleColor() {
    setLight(!light);
    toggleTheme();
  }

  const styleProps = {
    height: "13.8rem",
    opacity: 1,
  };
  return (
    <header>
      <div className="header__content">
        <Link to="/">
          {" "}
          <h1
            className="header__heading"
            style={{
              color: theme === "light" ? "#11121D" : "rgb(240, 231, 219)",
            }}
          >
            <FaLaptopCode /> MSKHAN
          </h1>
        </Link>

        <div className="options">
          {light ? (
            <BsFillMoonFill
              onClick={toggleColor}
              style={{
                color: theme === "light" ? "#11121D" : "rgb(240, 231, 219)",
              }}
              className="icon__lg moon"
            />
          ) : (
            <BsFillSunFill
              onClick={toggleColor}
              style={{
                color: theme === "light" ? "#11121D" : "rgb(240, 231, 219)",
              }}
              className="icon__lg sun"
            />
          )}
          {!open ? (
            <FiMenu
              style={{
                color: theme === "light" ? "#11121D" : "rgb(240, 231, 219)",
              }}
              onClick={toggleOpen}
              className="menu__icon"
            />
          ) : (
            <GiTireIronCross
              onClick={toggleOpen}
              className="menu__icon"
              style={{
                color: theme === "light" ? "#11121D" : "rgb(240, 231, 219)",
              }}
            />
          )}{" "}
        </div>
        <div className="hamburgur__menu" style={open ? styleProps : null}>
          <ul className="menu__list">
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;

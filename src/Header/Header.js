import React, { useContext } from "react";
import ProfileButton from "./ProfileButton";
import CreditButton from "./CreditButton";
import TaskButton from "./TaskButton";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import ThemeSwitch from "../Themes/ThemeSwitch";

function Header() {
  const { darkMode, getDarkMode } = useContext(Context);
  return (
    <header style={getDarkMode(darkMode, "header")}>
      <ThemeSwitch />
      <Link to="/about">
        <div className="crossTitle">Cross Posts</div>
      </Link>
      <TaskButton />
      <ProfileButton />
      <CreditButton />
    </header>
  );
}

export default Header;

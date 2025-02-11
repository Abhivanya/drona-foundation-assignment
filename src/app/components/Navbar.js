import React from "react";
import "../../../styles/Navbar.css";
import { IoSearch } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <div className="left">
        <h1>Hello Priyam!</h1>
        <p>Welcome to Skill College</p>
      </div>
      <div className="right">
        <div className="searchBox">
          <input
            type="text"
            className="searchInput"
            placeholder="Search"
            name="search"
          />
          <IoSearch size={20} className="searchIcon" />
        </div>
        <div className="notification">
          <div className="countContainer">
            <LuMessageSquareMore size={30} className="navIcon" />
            <span className="count">5</span>
          </div>
          <div className="countContainer">
            <FiBell size={30} className="navIcon" />
            <span className="count">157</span>
          </div>
          <div className="profile">
            <Image
              src="/profileImage.jpg"
              alt="Profile Image"
              width={30}
              height={30}
              className="profileImage"
            />
            <select name="profile" id="">
              <option value="StudentProfile">Student Profile</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

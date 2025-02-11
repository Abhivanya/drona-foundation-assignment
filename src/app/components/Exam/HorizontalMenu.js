"use client";
import { FiMenu } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import "../../../../styles/Horizontal-menu.css";
import { useState } from "react";

const menuItems = [
  "Exam Panel",
  "Timetable",
  "Eligibility Checker",
  "Hall Ticket",
  "Supervisors",
  "Paper Print",
  "Signature Sheet",
  "Paper Check",
  "Mark Entry",
];

const HorizontalMenu = () => {
  const [acitveButton, setActiveButton] = useState(6);
  //   content of the button is not dynamic for now. i have to lift the state up to mangae that.
  return (
    <div className="menu-container">
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div
            className={`menu-item ${index === acitveButton ? "active" : ""}`}
            key={index}
            onClick={() => setActiveButton(index)}
          >
            <TfiMenuAlt />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalMenu;

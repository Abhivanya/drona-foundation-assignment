"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiUser, FiSettings } from "react-icons/fi";
import Image from "next/image";
import "../../../styles/Sidebar.css";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <aside className="sidebar">
      <div className="logo">
        <Image
          src="/logo.png"
          alt="Skill.College Logo"
          width={50}
          height={28}
          className="profileImage"
        />
        <p>Skill.College</p>
      </div>

      <div className="bottom">
        <div className="overview">
          <Image
            src="/stack.png"
            alt="Skill.College Logo"
            width={20}
            height={17}
            className="profileImage"
          />
          <p>Overview</p>
        </div>
        <div className="divder"></div>
        <ul>
          <li>
            <Link
              href="/manage-user"
              className={isActive("/manage-user") ? "active" : ""}
            >
              <span className={isActive("/") ? "check" : "unCheck"}></span>
              <span className="linkText">Manage User</span>
            </Link>
          </li>
          <li>
            <Link
              href="/academic"
              className={isActive("/academic") ? "active" : ""}
            >
              <span
                className={isActive("/academic") ? "check" : "unCheck"}
              ></span>
              <span className="linkText">Academic</span>
            </Link>
          </li>
          <li>
            <Link
              href="/attendance"
              className={isActive("/attendance") ? "active" : ""}
            >
              <span
                className={isActive("/attendance") ? "check" : "unCheck"}
              ></span>
              <span className="linkText">Attendance</span>
            </Link>
          </li>
          <li>
            <Link
              href="/help-desk"
              className={isActive("/help-desk") ? "active" : ""}
            >
              <span
                className={isActive("/help-desk") ? "check" : "unCheck"}
              ></span>
              <span className="linkText">Help Desk</span>
            </Link>
          </li>
          <li>
            <Link href="/task" className={isActive("/task") ? "active" : ""}>
              <span className={isActive("/task") ? "check" : "unCheck"}></span>
              <span className="linkText">Task</span>
            </Link>
          </li>
          <li>
            <Link
              href="/placement"
              className={isActive("/placement") ? "active" : ""}
            >
              <span
                className={isActive("/placement") ? "check" : "unCheck"}
              ></span>
              <span className="linkText">Task</span>
            </Link>
          </li>
          <li>
            <Link
              href="/directory"
              className={isActive("/directory") ? "active" : ""}
            >
              <span
                className={isActive("/directory") ? "check" : "unCheck"}
              ></span>
              <span className="linkText">Directory</span>
            </Link>
          </li>
          <li>
            <Link href="/exam" className={isActive("/exam") ? "active" : ""}>
              <span
                className={isActive("/directory") ? "check" : "unCheck"}
              ></span>
              <span className="linkText">Exam</span>
            </Link>
          </li>
        </ul>
        <div className="add-new" onClick={() => alert("Add New Pop up")}>
          <Image
            src="/cross.png"
            alt="Skill.College Logo"
            width={33}
            height={28}
            className="profileImage"
          />
          <p>Add new</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

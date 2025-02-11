import Image from "next/image";
import "../../../../styles/Exam-card.css";
import { FaRegLightbulb } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { BsBoxArrowRight } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
const ExamCard = () => {
  return (
    <div className="exam-card">
      <div className="exam-card-left">
        <div className="college-profile">
          <Image
            src="/bm-logo.png"
            alt="BMU Logo"
            width={50}
            height={35}
            className="logo"
          />
          <div>
            <p>Bhagwan Mahavir University</p>
            <h3>Mid Term CIA 2 Exam April-2024</h3>
            <p>
              Semester 1 <span className="sem-divider">|</span> Batch 2022-25
            </p>
          </div>
        </div>

        <div className="middle-section">
          <div className="course">
            <GiTrophyCup size={22} />
            <p>Bachelor of Vocation</p>
          </div>
          <div className="subject">
            <FaRegLightbulb size={22} />
            <p>Practical Accounting, Taxation & Tally</p>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="right-top">
          <button className="postpone-button">Postpone</button>
          <button className="export-button">
            <BsBoxArrowRight size={20} />
            Export Data
          </button>
          <span className="menu-icon">
            <CiMenuKebab />
          </span>
        </div>
        <div className="right-bottom">
          <div className="progress">
            <p>Pre exam task: 41/94</p>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
          <div className="socials">
            <BiMessageRoundedDetail size={20} />
            <HiUsers size={20} />
            <FaHistory size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;

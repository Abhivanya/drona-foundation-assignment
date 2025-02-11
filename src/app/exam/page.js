import React from "react";
import "../../../styles/ExamPage.css";
import { GoSearch } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import ExamCard from "../components/Exam/ExamCard";
import HorizontalMenu from "../components/Exam/HorizontalMenu";
import SignatureSheet from "../components/Exam/SignatureSheet";
const page = () => {
  return (
    <div className="container">
      <div className="exam-section">
        <div className="exam-section-left">
          <h2>Exam</h2>
          <p>Exam/Dashboard/BMU_Mid_CIA2_APR24&BVOC&PATT&1&3&5</p>
        </div>
        <div className="exam-section-right">
          <div className="search-icon">
            <GoSearch size={22} />
          </div>
          <div className="create-exam">
            <FaPlus size={22} />
            <span className="create-exam-text">Create Exam</span>
          </div>
          <div className="exam-history">
            <MdOutlineHistory size={22} />
            <span className="exam-history-text">Exam History</span>
          </div>
        </div>
      </div>
      <div className="exam-divider"></div>
      <ExamCard />
      <HorizontalMenu />
      <SignatureSheet />
    </div>
  );
};

export default page;

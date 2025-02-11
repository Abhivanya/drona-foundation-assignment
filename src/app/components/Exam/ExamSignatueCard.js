import { FiCalendar, FiCheckCircle } from "react-icons/fi";
import { PiInfoLight } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import "../../../../styles/Exam-Signature-card.css";

const ExamSignatureCard = ({
  status,
  subjectCode,
  subjectName,
  examDate,
  totalStudents,
  presentStudents,
  absentStudents,
}) => {
  const isExamConducted = status === "conducted";
  const remainingStudents = totalStudents - presentStudents;

  return (
    <div
      className={`exam-signature-card ${
        isExamConducted ? "conducted" : "not-conducted"
      }`}
    >
      <div className={`card-header ${isExamConducted ? "green" : "red"}`}>
        <span>{isExamConducted ? "Exam Conducted" : "Exam Not Conducted"}</span>
        {isExamConducted && <PiInfoLight size={20} />}
      </div>

      <div className="card-body">
        <div className="card-top">
          <div className="subject-code">
            <p>
              <span
                className={`alphabet ${isExamConducted ? "green" : "blue"}`}
              >
                S
              </span>{" "}
              Subject Code: {subjectCode}
            </p>
            <CiMenuKebab className="menu-icon" size={30} color="black" />
          </div>
          <h3>{subjectName}</h3>
          <p className="exam-card-calander">
            <FiCalendar /> Exam Date: {examDate}
          </p>
        </div>

        <div className="student-attendance">
          <div className="student-attendence-top">
            <h4>Student Attendance</h4>
            <span className="student-attendence-status">
              {isExamConducted ? "Draft" : "Not Marked"}
            </span>
          </div>
          <div className="stats">
            <div className="stat-box">
              <p>Total Students</p>
              <span className="student-count text-blue">{totalStudents}</span>
            </div>
            <div className="stat-box">
              <p>Present Students</p>
              <span className="student-count text-green">
                {presentStudents}
              </span>
            </div>
            <div className="stat-box ">
              <p>Absent Students</p>
              <span className="student-count text-red">{absentStudents}</span>
            </div>
          </div>
          {remainingStudents > 0 && (
            <div className="remaining-info">
              4 students remain for attendance
            </div>
          )}
          {isExamConducted ? (
            <button className="attendance-btn">
              Mark/Edit Student's Attendance
            </button>
          ) : (
            <button className="attendance-btn">Mark Exam Conducted</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamSignatureCard;

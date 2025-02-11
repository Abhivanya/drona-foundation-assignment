import React from "react";
import "../../../../styles/SignatureSheet.css";
import ExamSignatureCard from "./ExamSignatueCard";
const SignatureSheet = () => {
  const examData = {
    status: "conducted",
    subjectCode: "4110343181",
    subjectName: "Introduction to Functional English",
    examDate: "01-01-2025",
    totalStudents: 58,
    presentStudents: 52,
    absentStudents: 2,
  };
  return (
    <div className="signatue-sheet">
      <ExamSignatureCard
        status="conducted"
        subjectCode="4110343181"
        subjectName="Introduction to Functional English"
        examDate="01-01-2025"
        totalStudents="58"
        presentStudents="52"
        absentStudents="2"
      />
      <ExamSignatureCard
        status="not-conducted"
        subjectCode="4110343181"
        subjectName="Introduction to Functional English"
        examDate="01-01-2025"
        totalStudents="58"
        presentStudents="00"
        absentStudents="00"
      />
      <ExamSignatureCard
        status="conducted"
        subjectCode="4110343181"
        subjectName="Introduction to Functional English"
        examDate="01-01-2025"
        totalStudents="62"
        presentStudents="57"
        absentStudents="05"
      />
      <ExamSignatureCard
        status="conducted"
        subjectCode="4110343181"
        subjectName="Introduction to Functional English"
        examDate="01-01-2025"
        totalStudents="57"
        presentStudents="57"
        absentStudents="00"
      />
      <ExamSignatureCard
        status="not-conducted"
        subjectCode="4110343181"
        subjectName="Introduction to Functional English"
        examDate="01-01-2025"
        totalStudents="57"
        presentStudents="00"
        absentStudents="00"
      />
    </div>
  );
};

export default SignatureSheet;

import React from "react";
import "../../../../styles/SignatureSheet.css";
import ExamSignatureCard from "./ExamSignatueCard";
const SignatureSheet = () => {
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
        summaryMessage="4 Student remain for mark attendance"
      />
      <ExamSignatureCard
        status="not-conducted"
        subjectCode="4110343181"
        subjectName="Introduction to Functional English"
        examDate="01-01-2025"
        totalStudents="58"
        presentStudents="00"
        absentStudents="00"
        summaryMessage="First mark exam as conducted"
      />
      <ExamSignatureCard
        status="conducted"
        subjectCode="4110343181"
        subjectName="Introduction to Functional English"
        examDate="01-01-2025"
        totalStudents="62"
        presentStudents="57"
        absentStudents="05"
        summaryMessage="Good to Go!"
      />
      <ExamSignatureCard
        status="conducted"
        subjectCode="4110343181"
        subjectName="Introduction to Functional English"
        examDate="01-01-2025"
        totalStudents="57"
        presentStudents="57"
        absentStudents="00"
        summaryMessage="Good to Go!"
      />
      <ExamSignatureCard
        status="not-conducted"
        subjectCode="4110343181"
        subjectName="Introduction to Functional English"
        examDate="01-01-2025"
        totalStudents="57"
        presentStudents="00"
        absentStudents="00"
        summaryMessage="First mark exam as conducted"
      />
    </div>
  );
};

export default SignatureSheet;

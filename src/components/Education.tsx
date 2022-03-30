import { Component } from 'react';
import './Education.css';
import School, { SchoolData } from './School';

interface EducationData {
  examScore: number;
  primary: SchoolData;
  secondary: SchoolData;
  tertiary: SchoolData;
}

class Education extends Component<EducationData, {}> {
  render() {
    return (
      <div className="education">
        <div className="education-title">Education</div>
        <div className="exam-score">
          Civil Service Exam Score: {this.props.examScore}
        </div>
        <School {...this.props.primary}></School>
        <School {...this.props.secondary}></School>
        <School {...this.props.tertiary}></School>
      </div>
    );
  }
}

export type { EducationData };

export default Education;

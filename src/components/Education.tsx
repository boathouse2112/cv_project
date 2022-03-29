import { Component } from 'react';
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
        <div>Civil Service Exam Score: {this.props.examScore}</div>
        <School {...this.props.primary}></School>
        <School {...this.props.secondary}></School>
      </div>
    );
  }
}

export type { EducationData };

export default Education;

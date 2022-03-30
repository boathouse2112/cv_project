import { Component } from 'react';
import './School.css';

type EducationPhase = 'primary' | 'secondary' | 'tertiary';

interface SchoolData {
  educationPhase: EducationPhase;
  schoolName: string;
  startYear: number;
  endYear: number;
}

class School extends Component<SchoolData, {}> {
  render() {
    return (
      <div className={`school ${this.props.educationPhase}`}>
        <div>
          {this.props.educationPhase}: {this.props.schoolName}
        </div>
        <div>
          {this.props.startYear} - {this.props.endYear}
        </div>
      </div>
    );
  }
}

export type { EducationPhase, SchoolData };

export default School;

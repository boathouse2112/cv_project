import { Component } from 'react';
import { AppState } from '../App';
import Education from './Education';
import MilitaryService from './MilitaryService';
import PersonalInformation from './PersonalInformation';
import './Resume.css';

class Resume extends Component<AppState, {}> {
  render() {
    return (
      <div className="resume">
        <PersonalInformation
          {...this.props.personalInformation}
        ></PersonalInformation>
        <Education {...this.props.education}></Education>
        <MilitaryService {...this.props.militaryService}></MilitaryService>
      </div>
    );
  }
}

export default Resume;

import { Component } from 'react';
import { AppState } from '../../App';
import Education from './Education';
import MilitaryService from './MilitaryService';
import PartyAffiliation from './PartyAffiliation';
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
        <PartyAffiliation {...this.props.partyAffiliation}></PartyAffiliation>
      </div>
    );
  }
}

export default Resume;

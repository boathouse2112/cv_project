import { Component } from 'react';
import { AppState } from '../App';
import PersonalInformation from './PersonalInformation';
import './Resume.css';

class Resume extends Component<AppState, {}> {
  render() {
    return (
      <div className="resume">
        <PersonalInformation
          {...this.props.personalInformation}
        ></PersonalInformation>
      </div>
    );
  }
}

export default Resume;

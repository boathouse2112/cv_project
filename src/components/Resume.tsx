import { Component } from 'react';
import { AppState } from '../App';
import PersonalInformation from './PersonalInformation';

class Resume extends Component<AppState, {}> {
  render() {
    return (
      <div id="resume">
        <PersonalInformation
          {...this.props.personalInformation}
        ></PersonalInformation>
      </div>
    );
  }
}

export default Resume;

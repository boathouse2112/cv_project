import React, { Component } from 'react';
import './App.css';
import { EducationData } from './components/Education';
import { PersonalInformationData } from './components/PersonalInformation';
import Resume from './components/Resume';

interface AppState {
  personalInformation: PersonalInformationData;
  education: EducationData;
}

const initialState: AppState = {
  personalInformation: {
    name: 'Mark Murphy',
    age: 0,
    sex: 'male',
    id: '000283',
    phone: '000-000-000',
    address: '28967',
  },
  education: {
    examScore: 100,
    primary: {
      educationPhase: 'primary',
      schoolName: 'Elementary Academy for the Elements',
      startYear: 1999,
      endYear: 2006,
    },
    secondary: {
      educationPhase: 'secondary',
      schoolName: 'Secondary Academy for the Seconds',
      startYear: 2006,
      endYear: 2011,
    },
    tertiary: {
      educationPhase: 'tertiary',
      schoolName: 'Tertiary Academy for the Tertiares',
      startYear: 2011,
      endYear: 2015,
    },
  },
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = initialState;
  }

  render() {
    return (
      <div className="app">
        <Resume {...this.state} />
      </div>
    );
  }
}

export type { AppState };
export default App;

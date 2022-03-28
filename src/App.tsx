import React, { Component } from 'react';
import './App.css';
import { PersonalInformationProps } from './components/PersonalInformation';
import Resume from './components/Resume';

interface AppState {
  personalInformation: PersonalInformationProps;
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

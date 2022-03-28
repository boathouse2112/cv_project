import React, { Component } from 'react';
import PersonalInformation, {
  PersonalInformationProps,
} from './components/PersonalInformation';

interface AppState {
  personalInformation: PersonalInformationProps;
}

const initialState: AppState = {
  personalInformation: {
    name: 'Mark Murphy',
    age: 0,
    gender: 'male',
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
      <div className="App">
        <PersonalInformation {...this.state.personalInformation} />
      </div>
    );
  }
}

export default App;
